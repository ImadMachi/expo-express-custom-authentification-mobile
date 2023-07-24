import getCurrentUser from "@features/authentication/services/getCurrentUser";
import { User } from "@typing/index";
import { router, useSegments } from "expo-router";
import React, { useEffect } from "react";

interface AuthContextProps {
	login: (user: User) => void;
	logout: () => void;
	user: User | null;
}
const initialAuthContextValue: AuthContextProps = {
	login: (user: User) => {},
	logout: () => {},
	user: null,
};
const AuthContext = React.createContext<AuthContextProps>(initialAuthContextValue);

export function useAuthContext() {
	return React.useContext(AuthContext);
}

function useProtectedRoute(user: User | null) {
	const segments = useSegments();
	useEffect(() => {
		const inAuthGroup = segments[0] === "(auth)";
		if (!user && inAuthGroup) {
			router.replace("/auth/login?redirectUrl=" + encodeURIComponent(`/${segments.join("/")}`));
		}
	}, [user, segments]);
}

export function AuthProvider(props: { children: React.ReactNode }) {
	const [user, setAuth] = React.useState<User | null>(null);
	const { data, isSuccess } = getCurrentUser();

	useEffect(() => {
		if (isSuccess && data) {
			setAuth(data);
		}
	}, [isSuccess, data]);

	useProtectedRoute(user);

	return (
		<AuthContext.Provider
			value={{
				login: (user: User) => setAuth(user),
				logout: () => setAuth(null),
				user,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}
