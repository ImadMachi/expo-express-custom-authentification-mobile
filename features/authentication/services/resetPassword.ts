import { api } from "@config/api";
import { useMutation } from "@tanstack/react-query";
import { HttpError } from "@typing/index";
import { router } from "expo-router";
import Toast from "react-native-root-toast";

interface LoginUserInput {
	newPassword: string;
}
export default function resetPassword() {
	return useMutation<void, HttpError, LoginUserInput>({
		mutationFn: async (payload) => {
			await api.post("/users/reset-password", payload);
		},
		onSuccess: () => {
			router.replace("/");
		},
		onError: (error) => {
			if (error.status?.toString().startsWith("4")) {
				Toast.show(error.message, {
					duration: Toast.durations.LONG,
				});
			} else {
				Toast.show("Reset Password failed. Please try again.", {
					duration: Toast.durations.LONG,
				});
			}
		},
	});
}
