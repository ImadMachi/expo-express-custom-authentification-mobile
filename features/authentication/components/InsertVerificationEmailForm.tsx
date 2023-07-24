import { Button, StyleSheet, Text, View } from "react-native";
import TextInput from "./TextInput";
import { COLORS, SPACING, TEXTS } from "@constants/theme";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { AntDesign } from "@expo/vector-icons";
import { useEffect } from "react";
import { router } from "expo-router";
import sendVerificationCode from "../services/sendVerificationCode";

const schema = yup.object().shape({
	email: yup.string().email().required(),
});

const InsertVerificationEmailForm = () => {
	const queryClient = useQueryClient();
	const { isLoading, mutate } = sendVerificationCode();

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		if (queryClient.getQueryData(["userEmail"])) {
			router.replace("/auth/verify-user?redirectUrl=%2F%28auth%29%2Fusers%2Freset-password");
		}
	}, []);

	const onSubmit = (data: yup.InferType<typeof schema>) => {
		queryClient.setQueryData(["userEmail"], data.email);
		mutate(data);
		router.replace("/auth/verify-user?redirectUrl=%2F%28auth%29%2Fusers%2Freset-password");
	};

	return (
		<View style={styles.container}>
			<View style={styles.iconWrapper}>
				<AntDesign name="mail" size={100} style={{ marginRight: 10 }} color={COLORS.slate950} />
			</View>
			<Text style={styles.title}>
				Please enter your email address. We will send you a verification code to reset your password.
			</Text>

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput placeholder="Email" style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
				)}
				name="email"
			/>

			<Button title="Next" onPress={handleSubmit(onSubmit)} color={isLoading ? COLORS.slate300 : COLORS.blue500} />
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
	input: { marginBottom: SPACING.lg },
});

export default InsertVerificationEmailForm;
