import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "intl-pluralrules";
import "@locales";

export default function Layout() {
	const [fontsLoaded] = useFonts({
		// RobotoThin: require("../assets/fonts/Roboto-Thin.ttf"),
		RobotoLight: require("../assets/fonts/Roboto-Light.ttf"),
		RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
		RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
		RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
		// RobotoBlack: require("../assets/fonts/Roboto-Black.ttf"),
		// RobotoItalic: require("../assets/fonts/Roboto-Italic.ttf"),
		// RobotoThinItalic: require("../assets/fonts/Roboto-ThinItalic.ttf"),
		RobotoLightItalic: require("../assets/fonts/Roboto-LightItalic.ttf"),
		RobotoRegularItalic: require("../assets/fonts/Roboto-Italic.ttf"),
		RobotoMediumItalic: require("../assets/fonts/Roboto-MediumItalic.ttf"),
		RobotoBoldItalic: require("../assets/fonts/Roboto-BoldItalic.ttf"),
		// RobotoBlackItalic: require("../assets/fonts/Roboto-BlackItalic.ttf"),
	});

	if (!fontsLoaded) {
		return <SplashScreen />;
	}

	return <Stack />;
}
