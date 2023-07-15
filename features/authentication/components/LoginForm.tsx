import { Button, StyleSheet, Text, View } from "react-native";
import TextInput from "./TextInput";
import { Link } from "expo-router";
import { COLORS, SPACING, TEXTS } from "@constants/theme";
import loginUser from "../services/loginUser";

const LoginForm = () => {
	const { data, isLoading, isError, isSuccess, error, mutate } = loginUser();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>IA2I Club</Text>
			<TextInput placeholder="Email" style={{ marginBottom: 10 }} />
			<TextInput placeholder="Password" style={{ marginBottom: 10 }} />
			<Link href="#" style={styles.link}>
				Forgot password?
			</Link>
			<Button
				title="Log in"
				onPress={() => mutate({ email: "imadoxmachi@gmail.com", password: "qwerty@1234" })}
				color={COLORS.blue500}
			/>
			{isLoading && <Text>Loading...</Text>}
			{isError && <Text>{JSON.stringify(error.message)}</Text>}
			{isSuccess && <Text>{JSON.stringify(data.user)}</Text>}
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
