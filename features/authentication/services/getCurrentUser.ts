import { api } from "@config/api";
import { useQuery } from "@tanstack/react-query";
import { HttpError, User } from "@typing/index";

export default function getCurrentUser() {
	return useQuery<User, HttpError>(["currentUser"], () => api.get("/users/get-current-user").then((res) => res.data));
}
