// import { UsersApi } from "../api/api";
// import { UsersType } from "../types/types";

// const FOLLOW = "users/FOLLOW";
// const UN_FOLLOW = "users/UN_FOLLOW ";
// const SET_USERS = "users/SET_USERS";
// const SET_COUNT_PAGE = "users/SET_COUNT_PAG";
// const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
// const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
// const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";


// // Types
// type initialStateType = typeof initialState;
// type FollowAcType = {
// 	type: typeof FOLLOW
// 	userID: number
// }
// type UnFollowAcType = {
// 	type: typeof UN_FOLLOW
// 	userID: number
// }
// type SetUsersAcType = {
// 	type: typeof SET_USERS
// 	users: Array<UsersType>
// }
// type SetCurrentPageAcType = {
// 	type: typeof SET_COUNT_PAGE
// 	currentPage: number
// }
// type SetTotalUsersCountAcType = {
// 	type: typeof SET_TOTAL_USERS_COUNT
// 	totalCount: number
// }
// type ToggleIsFetchingAcType = {
// 	type: typeof TOGGLE_IS_FETCHING
// 	isFetching: boolean
// }
// type ToggleFollowingProgressAcType = {
// 	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
// 	isFetching: boolean
// 	userId: number
// }

// // Types End

// let initialState = {
// 	users: [] as Array<UsersType>,
// 	pageSize: 5 as number,
// 	totalUsersCount: 0 as number,
// 	currentPage: 1 as number,
// 	isFetching: true as boolean,
// 	followingInProgress: [] as Array<number>, // array of userId	
// }

// const usersReducer = (state = initialState, action: any): initialStateType => {
// 	switch (action.type) {
// 		case FOLLOW: {
// 			return {
// 				...state,
// 				users: state.users.map((user) => {
// 					if (user.id === action.userID) {
// 						return { ...user, followed: true }
// 					}
// 					return user;
// 				})
// 			};
// 		}
// 		case UN_FOLLOW: {
// 			return {
// 				...state,
// 				users: state.users.map((user) => {
// 					if (user.id === action.userID) {
// 						return { ...user, followed: false }
// 					}
// 					return user;
// 				})
// 			};
// 		}
// 		case SET_USERS: {
// 			return { ...state, users: [...action.users] }
// 		}
// 		case SET_COUNT_PAGE: {
// 			return { ...state, currentPage: action.currentPage }
// 		}
// 		case SET_TOTAL_USERS_COUNT: {
// 			return { ...state, totalUsersCount: action.totalCount }
// 		}
// 		case TOGGLE_IS_FETCHING: {
// 			return { ...state, isFetching: action.isFetching }
// 		}
// 		case TOGGLE_IS_FOLLOWING_PROGRESS: {
// 			return {
// 				...state,
// 				followingInProgress: action.isFetching
// 					? [...state.followingInProgress, action.userId]
// 					: state.followingInProgress.filter((id) => id !== action.userId),
// 			}
// 		}
// 		default: return state;
// 	}
// };

// // ACTION CREATE

// export const FollowAc = (userID: number): FollowAcType => ({ type: FOLLOW, userID });
// export const UnFollowAc = (userID: number): UnFollowAcType => ({ type: UN_FOLLOW, userID });
// export const SetUsersAc = (users: Array<UsersType>): SetUsersAcType => ({ type: SET_USERS, users });
// export const SetCurrentPageAc = (currentPage: number): SetCurrentPageAcType => ({ type: SET_COUNT_PAGE, currentPage });
// export const SetTotalUsersCountAc = (totalCount: number): SetTotalUsersCountAcType => ({ type: SET_TOTAL_USERS_COUNT, totalCount });

// export const ToggleIsFetchingAc = (isFetching: boolean): ToggleIsFetchingAcType => ({ type: TOGGLE_IS_FETCHING, isFetching });

// export const ToggleFollowingProgressAc = (isFetching: boolean, userID: number): ToggleFollowingProgressAcType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId: userID });

// // Thunk Creators

// export const GetUsersTc = (currentPage: number, pageSize: number) => async (dispatch: any) => {
// 	dispatch(ToggleIsFetchingAc(true));
// 	let response = await UsersApi.getUsers(currentPage, pageSize);
// 	dispatch(ToggleIsFetchingAc(false));
// 	dispatch(SetUsersAc(response.items));
// 	dispatch(SetTotalUsersCountAc(response.totalCount));
// }


// export const FollowTc = (userID: number) => async (dispatch: any) => {
// 	dispatch(ToggleFollowingProgressAc(true, userID));
// 	let response = await UsersApi.follow(userID);
// 	if (response.data.resultCode === 0) {
// 		dispatch(FollowAc(userID))
// 	}
// 	dispatch(ToggleFollowingProgressAc(false, userID));
// }


// export const UnFollowTc = (userID: number) => async (dispatch: any) => {
// 	dispatch(ToggleFollowingProgressAc(true, userID));
// 	let response = await UsersApi.unFollow(userID);
// 	if (response.data.resultCode === 0) {
// 		dispatch(UnFollowAc(userID))
// 	}
// 	dispatch(ToggleFollowingProgressAc(false, userID));
// }

// export default usersReducer; 