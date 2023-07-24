import { Button, StyleSheet, Text, View } from "react-native";
import TextInput from "./TextInput";
import { COLORS, SPACING, TEXTS } from "@constants/theme";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import registerUser from "../services/registerUser";

const schema = yup.object().shape({
	firstName: yup.string().min(2).required(),
	lastName: yup.string().min(2).required(),
	email: yup.string().email().required(),
	password: yup.string().min(8).required(),
});

const RegisterForm = () => {
	const { isLoading, mutate } = registerUser();
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
					<TextInput placeholder="First Name" onBlur={onBlur} onChangeText={onChange} value={value} />
				)}
				name="firstName"
			/>
			{errors.firstName && <Text style={styles.error}>{errors.firstName.message}</Text>}

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						placeholder="Last Name"
						style={{ marginTop: 10 }}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
					/>
				)}
				name="lastName"
			/>
			{errors.lastName && <Text style={styles.error}>{errors.lastName.message}</Text>}

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						placeholder="Email"
						style={{ marginTop: 10 }}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
					/>
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
			<View style={{ marginTop: 10 }}>
				<Button
					title="register"
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

export default RegisterForm;
