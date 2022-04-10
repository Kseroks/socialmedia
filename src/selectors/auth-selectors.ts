import { AppStateType } from "../redux/redux-store";

export const selectors = {
  getLoginSel: (state: AppStateType) => {
    return state.auth.login;
  },
  getIsAuthSel: (state: AppStateType) => {
    return state.auth.isAuth;
  },
  getCaptchaUrlSel: (state: AppStateType) => {
    return state.auth.captchaUrl;
  },
  authorizedUserIdSel: (state: AppStateType) => {
    return state.auth.userId;
  },
};
