import { Stack } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {
	COLORS,
	RADIUS,
	SHADOW,
	SPACING,
	bold,
	boldItalic,
	light,
	ligthItalic,
	medium,
	mediumItalic,
	regular,
	regularItalic,
} from "@/constants/theme";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack.Screen
				options={{
					headerStyle: {},
					headerShadowVisible: false,
					headerLeft: () => <AntDesign name="home" size={24} color={COLORS.blue900} />,
					// headerRight: () => <Text>Log</Text>,
					headerTitle: "home",
				}}
			/>
			<ScrollView style={{ flex: 1, padding: SPACING.lg }}>
				<Text style={{ fontFamily: light, color: COLORS.green900 }}>Home</Text>
				<Text style={{ fontFamily: regular }}>Home</Text>
				<Text style={{ fontFamily: medium }}>Home</Text>
				<Text style={{ fontFamily: bold }}>Home</Text>

				<Text style={{ fontFamily: ligthItalic }}>Home</Text>
				<Text style={{ fontFamily: regularItalic }}>Home</Text>
				<Text style={{ fontFamily: mediumItalic }}>Home</Text>
				<Text style={{ fontFamily: boldItalic }}>Home</Text>

				<View style={[{ width: SPACING["9xl"], height: SPACING["6xl"], borderRadius: RADIUS.sm }, SHADOW.sm]}></View>
				<View style={[{ width: SPACING["1/2"], height: 70, borderRadius: RADIUS.md }, SHADOW.md]}></View>
				<View style={[{ width: "100%", height: 400, borderRadius: RADIUS.lg }, SHADOW.lg]}></View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
