import { SecurityApi } from "../api/SecurityApi";
import { HeaderApi } from "../api/HeaderApi";
import { BaseThunkType, InferActionsTypes } from './redux-store'
import {ResultCodesEnum} from "../api/api";

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
export const thunks = {
  HeaderTc : (): ThunkType => async (dispatch) => {
    const data = await HeaderApi.getUsers();
    if (data.resultCode === ResultCodesEnum.Success) {
      const { id, email, login } = data.data;
      dispatch(actions.setAuthUserDataAc(id, email, login, true));
    }
  },

  LoginTc : (email: string, password: string, rememberMe: boolean, setStatus: any, captcha: string): ThunkType => async (dispatch) => {
    let data = await HeaderApi.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(thunks.HeaderTc());
    } else {
      if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
        dispatch(thunks.getCaptchaUrlTc());
      }
      setStatus(data.messages);
    }
  },

  LogOutTc : (): ThunkType => async (dispatch) => {
    const response = await HeaderApi.logOut();
    if (response.data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setAuthUserDataAc(null, null, null, false));
    }
  },

  getCaptchaUrlTc : (): ThunkType => async (dispatch) => {
    const data = await SecurityApi.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlAc(captchaUrl));
  },
}


export default authReducer;