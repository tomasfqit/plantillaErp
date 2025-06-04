export interface ILoginResponse {
	code: number;
	message: string;
	result: string;
}


export interface ILoginRequest {
	username: string;
	password: string;
}

export interface IUserLogin {
	token: string;
	username: string;
	name?: string;
	lastname?: string;
	email?: string;
	role?: string;
	permissions?: string[];
}