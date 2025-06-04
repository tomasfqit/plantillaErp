export interface ILoginResponse {
	code: number;
	message: string;
	result: string;
}


export interface ILoginRequest {
	username: string;
	password: string;
}