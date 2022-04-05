import { SecurityApi } from "../api/SecurityApi";
import { HeaderApi } from "../api/HeaderApi";
import { BaseThunkType, InferActionsTypes } from './redux-store'

// Types

export type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>


let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean | null,
  captchaUrl: null as string | null,
};

const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case "SET_USER_DATA": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "GET_CAPTCHA_URL": {
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

export const actions = {
  getCaptchaUrlAc: (captchaUrl: string) => ({
    type: "GET_CAPTCHA_URL",
    captchaUrl: { captchaUrl },
  } as const),

  setAuthUserDataAc: (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null) => ({
    type: "SET_USER_DATA",
    payload: { userId, email, login, isAuth },
  } as const),
}

// THUNK CREATORS

export const HeaderTc = (): ThunkType => async (dispatch) => {
  const response = await HeaderApi.getUsers();
  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(actions.setAuthUserDataAc(id, email, login, true));
  }
};

export const LoginTc = (email: string, password: string, rememberMe: boolean, setStatus: any, captcha: string): ThunkType => async (dispatch) => {
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

export const LogOutTc = (): ThunkType => async (dispatch) => {
  const response = await HeaderApi.logOut();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserDataAc(null, null, null, false));
  }
};

export const getCaptchaUrlTc = (): ThunkType => async (dispatch) => {
  const response = await SecurityApi.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(actions.getCaptchaUrlAc(captchaUrl));
};

export default authReducer;