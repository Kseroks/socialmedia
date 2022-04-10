import { AppStateType } from "./redux-store";

export const getProfileSel = (state: AppStateType) => {
	return state.profilePage.profile;
}

export const getStatusSel = (state: AppStateType) => {
	return state.profilePage.status;
}

export const getPostsSel = (state: AppStateType) => {
	return state.profilePage.posts;
}

export const getNewPostTextSel = (state: AppStateType) => {
	return state.profilePage.newPostText;
}

