import { COLORS, SPACING } from "@constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { LoginForm } from "@features/authentication";
import { Link, Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const LoginPage = () => {
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
					headerTitle: "Login",
				}}
			/>
			<ScrollView style={{ flex: 1, backgroundColor: "white" }} contentContainerStyle={{ flex: 1 }}>
				<LoginForm />

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
						Don't have an account?{" "}
						<Link href="/signup" style={{ color: COLORS.blue500 }}>
							Sign up
						</Link>
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default LoginPage;
