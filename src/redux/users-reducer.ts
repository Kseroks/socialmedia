import { UsersApi } from "../api/UsersApi";
import { UserType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

// Types
export type initialStateType = typeof initialState;
export type filterType = typeof initialState.filter;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;

let initialState = {
	users: [] as Array<UserType>,
	pageSize: 6 as number,
	// pageSize: 5 as number,
	totalUsersCount: 0 as number,
	currentPage: 1 as number,
	isFetching: true as boolean,
	followingInProgress: [] as Array<number>, // array of userId
	filter: {
		term: "",
		friend: null as null | boolean,
	},
};

const usersReducer = (
	state: initialStateType = initialState,
	action: ActionsTypes
): initialStateType => {
	switch (action.type) {
		case "FOLLOW": {
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userID) {
						return { ...user, followed: true };
					}
					return user;
				}),
			};
		}
		case "UN_FOLLOW": {
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userID) {
						return { ...user, followed: false };
					}
					return user;
				}),
			};
		}
		case "SET_USERS": {
			return { ...state, users: [...action.users] };
		}
		case "SET_COUNT_PAGE": {
			return { ...state, currentPage: action.currentPage };
		}
		case "SET_TOTAL_USERS_COUNT": {
			return { ...state, totalUsersCount: action.totalCount };
		}
		case "TOGGLE_IS_FETCHING": {
			return { ...state, isFetching: action.isFetching };
		}
		case "TOGGLE_IS_FOLLOWING_PROGRESS": {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter((id) => id !== action.userId),
			};
		}
		case "SET_FILTER": {
			return { ...state, filter: action.payload };
		}
		default:
			return state;
	}
};

// ACTION CREATE
export const actions = {
	FollowAc: (userID: number) => ({ type: "FOLLOW", userID } as const),
	UnFollowAc: (userID: number) => ({ type: "UN_FOLLOW", userID } as const),
	SetUsersAc: (users: Array<UserType>) =>
		({ type: "SET_USERS", users } as const),
	SetCurrentPageAc: (currentPage: number) =>
		({ type: "SET_COUNT_PAGE", currentPage } as const),
	SetTotalUsersCountAc: (totalCount: number) =>
		({ type: "SET_TOTAL_USERS_COUNT", totalCount } as const),
	ToggleIsFetchingAc: (isFetching: boolean) =>
		({ type: "TOGGLE_IS_FETCHING", isFetching } as const),
	ToggleFollowingProgressAc: (isFetching: boolean, userID: number) =>
	({
		type: "TOGGLE_IS_FOLLOWING_PROGRESS",
		isFetching,
		userId: userID,
	} as const),
	setFilter: (filter: filterType) =>
	({
		type: "SET_FILTER",
		payload: filter,
	} as const),
};

// Thunk Creators
export const thunks = {
	GetUsersTc: (currentPage: number, pageSize: number, filter: filterType): ThunkType =>
		async (dispatch) => {
			dispatch(actions.ToggleIsFetchingAc(true));
			dispatch(actions.setFilter(filter));
			let data = await UsersApi.getUsers(
				currentPage,
				pageSize,
				filter.term,
				filter.friend
			);
			dispatch(actions.ToggleIsFetchingAc(false));
			dispatch(actions.SetUsersAc(data.items));
			dispatch(actions.SetTotalUsersCountAc(data.totalCount));
		},
	FollowTc: (userID: number): ThunkType =>
		async (dispatch) => {
			dispatch(actions.ToggleFollowingProgressAc(true, userID));
			let data = await UsersApi.follow(userID);
			if (data.resultCode === 0) {
				dispatch(actions.FollowAc(userID));
			}
			dispatch(actions.ToggleFollowingProgressAc(false, userID));
		},
	UnFollowTc: (userID: number): ThunkType =>
		async (dispatch) => {
			dispatch(actions.ToggleFollowingProgressAc(true, userID));
			let data = await UsersApi.unFollow(userID);
			if (data.resultCode === 0) {
				dispatch(actions.UnFollowAc(userID));
			}
			dispatch(actions.ToggleFollowingProgressAc(false, userID));
		},
};

export default usersReducer;
