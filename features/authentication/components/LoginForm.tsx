import { Button, StyleSheet, Text, View } from "react-native";
import TextInput from "./TextInput";
import { Link } from "expo-router";
import { COLORS, SPACING, TEXTS } from "@constants/theme";
import loginUser from "../services/loginUser";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

const LoginForm = () => {
	const { isLoading, mutate } = loginUser();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: yup.InferType<typeof schema>) => {
		mutate(data);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>IA2I Club</Text>

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput placeholder="Email" onBlur={onBlur} onChangeText={onChange} value={value} />
				)}
				name="email"
			/>
			{errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						placeholder="Password"
						style={{ marginTop: 10 }}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						secureTextEntry
					/>
				)}
				name="password"
			/>
			{errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
			<Link href="/auth/insert-verification-email" style={styles.link}>
				Forgot password?
			</Link>
			<Button title="Log in" onPress={handleSubmit(onSubmit)} color={isLoading ? COLORS.slate300 : COLORS.blue500} />
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
	link: {
		color: COLORS.blue600,
		fontSize: TEXTS.xs,
		textAlign: "right",
		marginBottom: 10,
	},
	signupLink: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: 50,
		backgroundColor: "gray",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default LoginForm;
