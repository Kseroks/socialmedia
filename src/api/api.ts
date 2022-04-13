import axios from "axios";

// Настройка запроса
export const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "5190a7a3-500f-408d-abd2-b4c5bbcefe98"
	},
	withCredentials: true,
});


export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
	CaptchaIsRequired = 10,
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
	data: D
	messages: Array<string>
	resultCode: RC
}