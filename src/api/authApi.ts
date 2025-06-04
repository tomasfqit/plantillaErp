import { ILoginRequest, ILoginResponse } from "../interfaces/IAuth";
import { post } from "./config";

export const authApi = {
	login: async (request: ILoginRequest) => {
		const response = await post<ILoginResponse>('/security/login/', request);
		return response.data;
	}
};