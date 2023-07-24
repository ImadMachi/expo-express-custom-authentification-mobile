import { api } from "@config/api";
import { useMutation } from "@tanstack/react-query";
import { HttpError } from "@typing/index";
import Toast from "react-native-root-toast";

interface LoginUserInput {
	email: string;
}
export default function sendVerificationCode() {
	return useMutation<void, HttpError, LoginUserInput>({
		mutationFn: async (payload) => {
			await api.post<Response>("/users/send-verifcaton-code", payload);
		},
		onSuccess: () => {
			Toast.show("Verification Code sent successfuly", {
				duration: Toast.durations.LONG,
			});
		},
		onError: (error) => {
			if (error.status?.toString().startsWith("4")) {
				Toast.show(error.message, {
					duration: Toast.durations.LONG,
				});
			} else {
				Toast.show("Can't send verification code. Please try later.", {
					duration: Toast.durations.LONG,
				});
			}
		},
	});
}
