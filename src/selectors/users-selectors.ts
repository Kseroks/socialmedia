import { AppStateType } from "../redux/redux-store";

export const selectors = {
  getUsersSel: (state: AppStateType) => {
    return state.usersPage.users;
  },

  getPageSizeSel: (state: AppStateType) => {
    return state.usersPage.pageSize;
  },

  getTotalUsersCountSel: (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
  },

  getCurrentPageSel: (state: AppStateType) => {
    return state.usersPage.currentPage;
  },

  getIsFetchingSel: (state: AppStateType) => {
    return state.usersPage.isFetching;
  },

  getFollowingInProgressSel: (state: AppStateType) => {
    return state.usersPage.followingInProgress;
  },

  getIsAuthSel: (state: AppStateType) => {
    return state.auth.isAuth;
  },
  getFilterSel: (state: AppStateType) => {
    return state.usersPage.filter;
  }
};
