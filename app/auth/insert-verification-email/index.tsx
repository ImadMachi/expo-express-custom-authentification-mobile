import { COLORS, SPACING } from "@constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { InsertVerificationEmailForm } from "@features/authentication";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";

const VerifyUserPage = () => {
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
					headerTitle: "Verification Email",
				}}
			/>
			<ScrollView
				style={{ flex: 1, backgroundColor: "white", padding: SPACING.lg }}
				contentContainerStyle={{ flex: 1 }}
			>
				<InsertVerificationEmailForm />
			</ScrollView>
		</SafeAreaView>
	);
};

export default VerifyUserPage;
