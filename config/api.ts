import axios from "axios";

const api = axios.create({
	baseURL: "http://192.168.43.70:8000/api",
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response) {
			const customError = {
				status: error.response.status,
				name: error.response.data.name,
				message: error.response.data.message,
			};

			return Promise.reject(customError);
		}

		return Promise.reject(error);
	}
);

export { api };
