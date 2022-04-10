import { AppStateType } from "../redux/redux-store";

export const selectors = {
  getProfileSel: (state: AppStateType) => {
    return state.profilePage.profile;
  },
  getStatusSel: (state: AppStateType) => {
    return state.profilePage.status;
  },
  getPostsSel: (state: AppStateType) => {
    return state.profilePage.posts;
  },
  getNewPostTextSel: (state: AppStateType) => {
    return state.profilePage.newPostText;
  },
};
