
import { instance } from "./api";

export const SecurityApi = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`);
	}
}