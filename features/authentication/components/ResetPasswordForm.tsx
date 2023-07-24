import { Button, StyleSheet, Text, View } from "react-native";
import TextInput from "./TextInput";
import { COLORS, SPACING, TEXTS } from "@constants/theme";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import resetPassword from "../services/resetPassword";

const schema = yup.object().shape({
	newPassword: yup.string().min(8).required(),
	repeatPassword: yup
		.string()
		.oneOf([yup.ref("newPassword")], "Passwords must match")
		.required(),
});

const ResetPasswordForm = () => {
	const { isLoading, mutate } = resetPassword();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: yup.InferType<typeof schema>) => {
		mutate({ newPassword: data.newPassword });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>IA2I Club</Text>

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput placeholder="New Password" onBlur={onBlur} onChangeText={onChange} value={value} secureTextEntry />
				)}
				name="newPassword"
			/>
			{errors.newPassword && <Text style={styles.error}>{errors.newPassword.message}</Text>}

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						placeholder="Repeat Password"
						style={{ marginTop: 10 }}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						secureTextEntry
					/>
				)}
				name="repeatPassword"
			/>
			{errors.repeatPassword && <Text style={styles.error}>{errors.repeatPassword.message}</Text>}

			<View style={styles.buttonContainer}>
				<Button
					title="Reset Password"
					onPress={handleSubmit(onSubmit)}
					color={isLoading ? COLORS.slate300 : COLORS.blue500}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: "stretch",
		flexGrow: 1,
		justifyContent: "center",
		padding: SPACING.lg,
	},
	title: {
		fontSize: TEXTS["3xl"],
		marginBottom: SPACING["3xl"],
		textAlign: "center",
	},
	error: {
		fontSize: TEXTS.xs,
		color: COLORS.red500,
	},
	buttonContainer: {
		marginTop: SPACING.md,
	},
});

export default ResetPasswordForm;
