import { api } from "@config/api";
import { useMutation } from "@tanstack/react-query";
import User from "@typing/User";

interface Response {
	token: string;
	user: User;
}

interface Error {
	status: number;
	name: string;
	message: string;
}

interface LoginUserInput {
	email: string;
	password: string;
}
export default function loginUser() {
	return useMutation<Response, Error, LoginUserInput>({
		mutationFn: async (payload) => api.post("/users/login", payload).then((res) => res.data),
	});
}
