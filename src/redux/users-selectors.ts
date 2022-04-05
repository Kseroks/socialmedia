// import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const getUsersSel = (state: AppStateType) => {
	return state.usersPage.users;
}

export const getPageSizeSel = (state: AppStateType) => {
	return state.usersPage.pageSize
}

export const getTotalUsersCountSel = (state: AppStateType) => {
	return state.usersPage.totalUsersCount;
}
export const getCurrentPageSel = (state: AppStateType) => {
	return state.usersPage.currentPage;
}
export const getIsFetchingSel = (state: AppStateType) => {
	return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state: AppStateType) => {
	return state.usersPage.followingInProgress;
}