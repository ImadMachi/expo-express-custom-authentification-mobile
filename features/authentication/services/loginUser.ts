import { api } from "@config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpError, User } from "@typing/index";
import { router, useLocalSearchParams } from "expo-router";
import Toast from "react-native-root-toast";
import sendVerificationCode from "./sendVerificationCode";
import { useAuthContext } from "@contexts/auth";

interface Response {
	token: string;
	user: User;
}

interface LoginUserInput {
	email: string;
	password: string;
}
export default function loginUser() {
	const { login } = useAuthContext();
	const queryClient = useQueryClient();
	const { mutate } = sendVerificationCode();
	const params = useLocalSearchParams();
	const redirectUrl = params.redirectUrl?.toString() || "/";

	return useMutation<Response, HttpError, LoginUserInput>({
		mutationFn: async (payload) => {
			const { data } = await api.post("/users/login", payload);
			login(data.user);

			await AsyncStorage.setItem("token", data.token);
			return data;
		},
		onSuccess: (data) => {
			if (!data.user.isVerified) {
				queryClient.setQueryData(["userEmail"], data.user.email);
				mutate({ email: data.user.email });
				router.replace("/auth/verify-user");
			} else {
				router.replace(redirectUrl);
			}
		},
		onError: (error) => {
			if (error.status?.toString().startsWith("4")) {
				Toast.show(error.message, {
					duration: Toast.durations.LONG,
				});
			} else {
				Toast.show("Authentication failed. Please check your credentials and try again.", {
					duration: Toast.durations.LONG,
				});
			}
		},
	});
}
