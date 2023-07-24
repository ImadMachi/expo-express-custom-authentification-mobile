import { api } from "@config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpError, User } from "@typing/index";
import { router } from "expo-router";
import Toast from "react-native-root-toast";
import { useLocalSearchParams } from "expo-router";

interface Response {
	token: string;
	user: User;
}

interface LoginUserInput {
	email: string;
	verificationCode: string;
}
export default function verifyUser() {
	const params = useLocalSearchParams();
	const redirectUrl = params.redirectUrl?.toString() || "/";

	const queryClient = useQueryClient();
	return useMutation<void, HttpError, LoginUserInput>({
		mutationFn: async (payload) => {
			const { data } = await api.post<Response>("/users/verify", payload);

			queryClient.setQueryData(["currentUser"], data.user);
			queryClient.setQueryData(["token"], data.token);

			await AsyncStorage.setItem("token", data.token);
		},
		onSuccess: () => {
			queryClient.removeQueries(["userEmail"]);
			router.replace(redirectUrl);
		},
		onError: (error) => {
			if (error.status?.toString().startsWith("4")) {
				Toast.show(error.message, {
					duration: Toast.durations.LONG,
				});
			} else {
				Toast.show("Verification failed. Please try again.", {
					duration: Toast.durations.LONG,
				});
			}
		},
	});
}
