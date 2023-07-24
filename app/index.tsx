import { Link, Stack } from "expo-router";
import { Button, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, RADIUS, SHADOWS, SPACING } from "@constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "@contexts/auth";

const lngs = {
	en: { nativeName: "English" },
	de: { nativeName: "Deutsch" },
};

const Home = () => {
	// const { t, i18n } = useTranslation();
	const { user } = useAuthContext();
	// AsyncStorage.removeItem("token");
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack.Screen
				options={{
					headerStyle: {},
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => <AntDesign name="home" size={24} color={COLORS.blue900} />,
					headerTitle: "home",
				}}
			/>
			<ScrollView style={{ flex: 1, padding: SPACING.lg }}>
				<Link href="/auth/login">Go to login page</Link>
				<Link href="/auth/register">Go to register page</Link>
				<Link href="/auth/verify-user">Go to Verification page</Link>
				<Link href="/(auth)/users/reset-password">Go to Reset Password page</Link>

				{!!user ? <Text>{user.firstName}</Text> : <Text>Please Login</Text>}
				{/* <View>
					{(Object.keys(lngs) as Array<keyof typeof lngs>).map((lng) => (
						<TouchableOpacity
							key={lng}
							onPress={() => {
								i18n.changeLanguage(lng);
							}}
						>
							<Text style={{ fontFamily: i18n.resolvedLanguage === lng ? FONTS.bold : FONTS.regular }}>
								{lngs[lng].nativeName}
							</Text>
						</TouchableOpacity>
					))}
				</View> */}

				{/* <Text>{t("welcome")}</Text> */}

				{/* <Text>{t("date", { date: new Date() })}</Text> */}
				{/* <Text style={{ fontFamily: FONTS.light, color: COLORS.green900 }}>Home</Text>
				<Text style={{ fontFamily: FONTS.regular }}>Home</Text>
				<Text style={{ fontFamily: FONTS.medium }}>Home</Text>
				<Text style={{ fontFamily: FONTS.bold }}>Home</Text>

				<Text style={{ fontFamily: FONTS.ligthItalic }}>Home</Text>
				<Text style={{ fontFamily: FONTS.regularItalic }}>Home</Text>
				<Text style={{ fontFamily: FONTS.mediumItalic }}>Home</Text>
				<Text style={{ fontFamily: FONTS.boldItalic }}>Home</Text>

				<View style={[{ width: SPACING["9xl"], height: SPACING["6xl"], borderRadius: RADIUS.sm }, SHADOWS.sm]}></View>
				<View style={[{ width: SPACING["1/2"], height: 70, borderRadius: RADIUS.md }, SHADOWS.md]}></View>
				<View style={[{ width: "100%", height: 400, borderRadius: RADIUS.lg }, SHADOWS.lg]}></View> */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
