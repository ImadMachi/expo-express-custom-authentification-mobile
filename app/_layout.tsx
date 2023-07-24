import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "intl-pluralrules";
import { RootSiblingParent } from "react-native-root-siblings";
import "@locales";
import { AppStateStatus, Platform } from "react-native";
import { QueryClient, QueryClientProvider, focusManager } from "@tanstack/react-query";
import useOnlineManager from "@hooks/useOnlineManager";
import useAppState from "@hooks/useAppState";
import { AuthProvider } from "@contexts/auth";

function onAppStateChange(status: AppStateStatus) {
	if (Platform.OS !== "web") {
		focusManager.setFocused(status === "active");
	}
}

const queryClient = new QueryClient();

export default function Layout() {
	useOnlineManager();
	useAppState(onAppStateChange);

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
		return SplashScreen.preventAutoHideAsync();
	}

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RootSiblingParent>
					<Stack />
				</RootSiblingParent>
			</AuthProvider>
		</QueryClientProvider>
	);
}
