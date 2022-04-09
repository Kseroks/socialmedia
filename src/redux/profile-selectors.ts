// import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const getProfileSel = (state: AppStateType) => {
	return state.profilePage.profile;
}

export const getStatusSel = (state: AppStateType) => {
	return state.profilePage.status;
}


