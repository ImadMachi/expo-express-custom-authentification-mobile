import { COLORS } from "@constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { ResetPasswordForm } from "@features/authentication";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";

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
					headerTitle: "Reset Password",
				}}
			/>
			<ScrollView style={{ flex: 1, backgroundColor: "white" }} contentContainerStyle={{ flex: 1 }}>
				<ResetPasswordForm />
			</ScrollView>
		</SafeAreaView>
	);
};

export default LoginPage;
