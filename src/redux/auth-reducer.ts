import { HeaderApi, SecurityApi } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL = "auth/GET_CAPTCHA_URL";

// Types

// export type initialStateType = {
//   userId: number | null;
//   email: string | null;
//   login: string | null;
//   isAuth: boolean;
//   captchaUrl: string | null;
// };

type setAuthUserDataAcTypePayload = {
	userId: number;
	email: string;
	login: string;
	isAuth: boolean;
};

type setAuthUserDataAcType = {
	type: typeof SET_USER_DATA,
	payload: setAuthUserDataAcTypePayload,
}
type getCaptchaUrlAcType = {
	type: typeof GET_CAPTCHA_URL;
	captchaUrl: { captchaUrl: string };
};

export type initialStateType = typeof initialState;
// Types End

let initialState = {
	userId: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false,
	captchaUrl: null as string | null,
};

const authReducer = (state: initialStateType = initialState, action: any): initialStateType => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
			};
		}
		case GET_CAPTCHA_URL: {
			return {
				...state,
				...action.captchaUrl,
			};
		}
		default:
			return state;
	}
};


// ACTION CREATORS

export const getCaptchaUrlAc = (captchaUrl: string): getCaptchaUrlAcType => ({
	type: GET_CAPTCHA_URL,
	captchaUrl: { captchaUrl },
});

export const setAuthUserDataAc = (userId: number, email: string, login: string, isAuth: boolean): setAuthUserDataAcType => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
});

// ACTION CREATORS END

// THUNK CREATORS

export const HeaderTc = () => async (dispatch: any) => {
	const response = await HeaderApi.getUsers();
	if (response.data.resultCode === 0) {
		const { id, email, login } = response.data.data;
		dispatch(setAuthUserDataAc(id, email, login, true));
	}
};

export const LoginTc = (email: string, password: string, rememberMe: boolean, setStatus: any, captcha: string) => async (dispatch: any) => {
	let response = await HeaderApi.login(email, password, rememberMe, captcha);
	if (response.data.resultCode === 0) {
		dispatch(HeaderTc());
	} else {
		if (response.data.resultCode === 10) {
			dispatch(getCaptchaUrlTc());
		}
		setStatus(response.data.messages);
	}
};

export const LogOutTc = () => async (dispatch: any) => {
	const response = await HeaderApi.logOut();
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserDataAc(null, null, null, false));
	}
};

export const getCaptchaUrlTc = () => async (dispatch: any) => {
	const response = await SecurityApi.getCaptchaUrl();
	const captchaUrl = response.data.url;
	dispatch(getCaptchaUrlAc(captchaUrl));
};

// THUNK CREATORS END

export default authReducer;