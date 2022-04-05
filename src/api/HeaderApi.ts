import { instance } from "./api";


export const HeaderApi = {
	getUsers() {
		return instance.get(`auth/me`);
	},
	login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
		return instance.post(`auth/login`, {
			email, password, rememberMe, captcha
		});
	},
	logOut() {
		return instance.delete(`auth/login`);
	},
}
