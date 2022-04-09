import { UsersApi } from "../api/UsersApi";
import { UserType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

// Types
export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<number>, // array of userId
};

const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state, users: state.users.map((user) => {
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
    default:
      return state;
  }
};

// ACTION CREATE
export const actions = {
  FollowAc: (userID: any) => ({ type: "FOLLOW", userID } as const),
  UnFollowAc: (userID: any) => ({ type: "UN_FOLLOW", userID } as const),
  SetUsersAc: (users: Array<UserType>) => ({ type: "SET_USERS", users } as const),
  SetCurrentPageAc: (currentPage: any) => ({ type: "SET_COUNT_PAGE", currentPage } as const),
  SetTotalUsersCountAc: (totalCount: any) => ({ type: "SET_TOTAL_USERS_COUNT", totalCount } as const),
  ToggleIsFetchingAc: (isFetching: any) => ({ type: "TOGGLE_IS_FETCHING", isFetching } as const),
  ToggleFollowingProgressAc: (isFetching: any, userID: any) => ({ type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId: userID, } as const),
};

// Thunk Creators
export const GetUsersTc =
  (currentPage: number, pageSize: number): ThunkType =>
    async (dispatch) => {
      dispatch(actions.ToggleIsFetchingAc(true));
      let data = await UsersApi.getUsers(currentPage, pageSize);
      dispatch(actions.ToggleIsFetchingAc(false));
      dispatch(actions.SetUsersAc(data.items));
      dispatch(actions.SetTotalUsersCountAc(data.totalCount));
    };
export const FollowTc =
  (userID: number): ThunkType =>
    async (dispatch) => {
      dispatch(actions.ToggleFollowingProgressAc(true, userID));
      let data = await UsersApi.follow(userID);
      if (data.resultCode === 0) {
        dispatch(actions.FollowAc(userID));
      }
      dispatch(actions.ToggleFollowingProgressAc(false, userID));
    };
export const UnFollowTc =
  (userID: number): ThunkType =>
    async (dispatch) => {
      dispatch(actions.ToggleFollowingProgressAc(true, userID));
      let data = await UsersApi.unFollow(userID);
      if (data.resultCode === 0) {
        dispatch(actions.UnFollowAc(userID));
      }
      dispatch(actions.ToggleFollowingProgressAc(false, userID));
    };

export default usersReducer;


