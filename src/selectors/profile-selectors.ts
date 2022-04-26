import { AppStateType } from "../redux/redux-store";

export const ProfileSel = {
  getProfile: (state: AppStateType) => {
    return state.profilePage.profile;
  },
  getStatus: (state: AppStateType) => {
    return state.profilePage.status;
  },
  getPosts: (state: AppStateType) => {
    return state.profilePage.posts;
  },
  getNewPostText: (state: AppStateType) => {
    return state.profilePage.newPostText;
  },
};
