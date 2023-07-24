import { COLORS, SPACING } from "@constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { RegisterForm } from "@features/authentication";
import { Link, Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const RegisterPage = () => {
	const router = useRouter();
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack.Screen
				options={{
					headerStyle: {},
					headerShadowVisible: true,
					headerBackVisible: false,
					headerLeft: () => (
						<AntDesign
							name="arrowleft"
							size={20}
							style={{ marginRight: 10 }}
							color={COLORS.slate950}
							onPress={() => router.back()}
						/>
					),
					// headerRight: () => <Text>Log</Text>,
					headerTitle: "Register",
				}}
			/>
			<ScrollView style={{ flex: 1, backgroundColor: "white" }} contentContainerStyle={{ flex: 1 }}>
				<RegisterForm />

				<View style={{}}>
					<Text
						style={{
							borderTopWidth: 1,
							borderTopColor: COLORS.slate200,
							color: COLORS.slate400,
							padding: SPACING.lg,
							textAlign: "center",
						}}
					>
						Have an account?{" "}
						<Link href="/auth/login" style={{ color: COLORS.blue500 }}>
							Log in
						</Link>
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default RegisterPage;
