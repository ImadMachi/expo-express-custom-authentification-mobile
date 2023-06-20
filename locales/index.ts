import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { formatRelative } from "date-fns";
import { enUS as en, de } from "date-fns/locale";
import Backend, { HttpBackendOptions } from "i18next-http-backend";

const locales = {
	en,
	de,
};

i18next
	.use(Backend)
	// .use({
	// 	type: "languageDetector",
	// 	async: true,
	// 	detect: async (callback: Function) => {
	// 		const storedData = await AsyncStorage.getItem("lang");
	// 		const lng = storedData || "en";
	// 		callback(lng);
	// 	},
	// })
	.use(initReactI18next)
	.init<HttpBackendOptions>({
		lng: "en", // if you're using a language detector, do not define the lng option
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	});

i18next.services.formatter?.add("DATE_HUGE", (value, lng, options) => {
	return formatRelative(value, new Date(), { locale: locales[lng as keyof typeof locales] });
});

export default i18next;
