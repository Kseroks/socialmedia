import { UsersApi } from "../api/UsersApi";
import { UsersType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from './redux-store' n

// Types
export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
// Types End

let initialState = {
	users: [] as Array<UsersType>,
	pageSize: 5 as number,
	totalUsersCount: 0 as number,
	currentPage: 1 as number,
	isFetching: true as boolean,
	followingInProgress: [] as Array<number>, // array of userId	
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
	switch (action.type) {
		case "users/FOLLOW": {
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userID) {
						return { ...user, followed: true }
					}
					return user;
				})
			};
		}
		case "users/UN_FOLLOW": {
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userID) {
						return { ...user, followed: false }
					}
					return user;
				})
			};
		}
		case "users/SET_USERS": {
			return { ...state, users: [...action.users] }
		}
		case "users/SET_COUNT_PAGE": {
			return { ...state, currentPage: action.currentPage }
		}
		case "users/SET_TOTAL_USERS_COUNT": {
			return { ...state, totalUsersCount: action.totalCount }
		}
		case "users/TOGGLE_IS_FETCHING": {
			return { ...state, isFetching: action.isFetching }
		}
		case "users/TOGGLE_IS_FOLLOWING_PROGRESS": {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter((id) => id !== action.userId),
			}
		}
		default: return state;
	}
};

// ACTION CREATE
export const actions = {
	FollowAc: (userID: number) => ({ type: "users/FOLLOW", userID } as const),
	UnFollowAc: (userID: number) => ({ type: "users/UN_FOLLOW", userID } as const),
	SetUsersAc: (users: Array<UsersType>) => ({ type: "users/SET_USERS", users }),
	SetCurrentPageAc: (currentPage: number) => ({ type: "users/SET_COUNT_PAGE", currentPage } as const),
	SetTotalUsersCountAc: (totalCount: number) => ({ type: "users/SET_TOTAL_USERS_COUNT", totalCount } as const),
	ToggleIsFetchingAc: (isFetching: boolean) => ({ type: "users/TOGGLE_IS_FETCHING", isFetching } as const),
	ToggleFollowingProgressAc: (isFetching: boolean, userID: number) => ({
		type: "users/TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId: userID
	} as const),
}

// Thunk Creators
export const GetUsersTc = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
	dispatch(actions.ToggleIsFetchingAc(true));
	let response = await UsersApi.getUsers(currentPage, pageSize);
	dispatch(actions.ToggleIsFetchingAc(false));
	dispatch(actions.SetUsersAc(response.items));
	dispatch(actions.SetTotalUsersCountAc(response.totalCount));
}
export const FollowTc = (userID: number): ThunkType => async (dispatch) => {
	dispatch(actions.ToggleFollowingProgressAc(true, userID));
	let response = await UsersApi.follow(userID);
	if (response.data.resultCode === 0) {
		dispatch(actions.FollowAc(userID))
	}
	dispatch(actions.ToggleFollowingProgressAc(false, userID));
}
export const UnFollowTc = (userID: number): ThunkType => async (dispatch) => {
	dispatch(actions.ToggleFollowingProgressAc(true, userID));
	let response = await UsersApi.unFollow(userID);
	if (response.data.resultCode === 0) {
		dispatch(actions.UnFollowAc(userID))
	}
	dispatch(actions.ToggleFollowingProgressAc(false, userID));
}

export default usersReducer; 