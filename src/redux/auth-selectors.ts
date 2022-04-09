import { AppStateType } from "./redux-store";

export const getIsAuthSel = (state: AppStateType) => {
	return state.auth.isAuth;
}

export const getCaptchaUrlSel = (state: AppStateType) => {
	return state.auth.captchaUrl;
}

export const authorizedUserIdSel = (state: AppStateType) => {
	return state.auth.userId;
}
