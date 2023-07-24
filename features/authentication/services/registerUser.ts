import { api } from "@config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpError } from "@typing/index";
import { router } from "expo-router";
import Toast from "react-native-root-toast";

interface Response {
	email: string;
}

interface RegisterUserInput {
	email: string;
	password: string;
}
export default function registerUser() {
	const queryClient = useQueryClient();
	return useMutation<Response, HttpError, RegisterUserInput>({
		mutationFn: async (payload) => {
			const { data } = await api.post("/users/register", payload);
			queryClient.setQueryData(["userEmail"], data.email);
			return data;
		},
		onSuccess: () => {
			router.replace("/auth/verify-user");
		},
		onError: (error) => {
			if (error.status.toString().startsWith("4")) {
				Toast.show(error.message, {
					duration: Toast.durations.LONG,
				});
			} else {
				Toast.show("Something went wrong, please try again", {
					duration: Toast.durations.LONG,
				});
			}
		},
	});
}
