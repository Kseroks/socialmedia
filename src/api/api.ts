import axios from "axios";

// Настройка запроса
export const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "d8a0a6b5-f5dc-4aec-8c98-2fe1415fe1d3"
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