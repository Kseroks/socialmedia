import { instance, APIResponseType, ResultCodesEnum } from "./api";

interface MeResponseDataType {
	id: number
	email: string
	login: string
}

interface LoginResponseDataType {userId: number}

export const HeaderApi = {
	async getUsers() {
		const res = await instance.get<APIResponseType<MeResponseDataType>>(`auth/me`);
		return res.data;
	},
	async login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
		const res = await instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum>>(`auth/login`, { email, password, rememberMe, captcha });
		return res.data;
	},
	logOut() {
		return instance.delete(`auth/login`);
	},
}
