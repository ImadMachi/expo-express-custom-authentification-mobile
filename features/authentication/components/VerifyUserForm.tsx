import { Button, StyleSheet, Text, View } from "react-native";
import TextInput from "./TextInput";
import { COLORS, SPACING, TEXTS } from "@constants/theme";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { AntDesign } from "@expo/vector-icons";
import verifyUser from "../services/verifyUser";
import sendVerificationCode from "../services/sendVerificationCode";
import { useRef, useState } from "react";

const schema = yup.object().shape({
	verificationCode: yup.string().required(),
});

const VerifyUserForm = () => {
	const { isLoading, mutate } = verifyUser();
	const { isLoading: isResendLoading, mutate: resendCode } = sendVerificationCode();
	const queryClient = useQueryClient();
	const [isCooldown, setIsCooldown] = useState(false);

	const [cooldownTime, setCooldownTime] = useState(30);
	const cooldownTimeRef = useRef(30);

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: yup.InferType<typeof schema>) => {
		mutate({ ...data, email: queryClient.getQueryData(["userEmail"])! });
	};

	const handleResendCode = () => {
		setIsCooldown(true);
		const cooldownInterval = setInterval(() => {
			if (cooldownTimeRef.current == 0) {
				setIsCooldown(false);
				cooldownTimeRef.current = 30;
				clearInterval(cooldownInterval);
			}
			cooldownTimeRef.current--;
			setCooldownTime(cooldownTimeRef.current);
		}, 1000);

		resendCode({ email: queryClient.getQueryData(["userEmail"])! });
	};

	return (
		<View style={styles.container}>
			<View style={styles.iconWrapper}>
				<AntDesign name="mail" size={100} style={{ marginRight: 10 }} color={COLORS.slate950} />
			</View>
			<Text style={styles.title}>
				We have sent a verification code to this email: {queryClient.getQueryData(["userEmail"])}
			</Text>

			<View style={styles.inputWrapper}>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="Verification Code"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="verificationCode"
				/>
				<Button
					title={`resend${isCooldown ? ` (${cooldownTime}s)` : ""}`}
					onPress={handleResendCode}
					color={isResendLoading || isCooldown ? COLORS.slate300 : COLORS.blue500}
					disabled={isResendLoading || isCooldown}
				/>
			</View>

			<Button
				title="Verify Email"
				onPress={handleSubmit(onSubmit)}
				color={isLoading ? COLORS.slate300 : COLORS.blue500}
				disabled={isLoading}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: "stretch",
		flexGrow: 1,
		justifyContent: "center",
	},
	iconWrapper: {
		alignItems: "center",
	},
	title: {
		fontSize: TEXTS["sm"],
		color: COLORS.slate400,
		marginBottom: SPACING["3xl"],
		textAlign: "center",
	},
	inputWrapper: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: SPACING.xl,
	},
	input: {
		flexGrow: 1,
	},
});

export default VerifyUserForm;
