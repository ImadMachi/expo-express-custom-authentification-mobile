export interface User {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	isVerified: boolean;
	role: string;
}

export interface HttpError {
	status: number;
	name: string;
	message: string;
}
