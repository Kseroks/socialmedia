import { ProfileApi } from "../api/ProfileApi";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { ProfileType, PostType, PhotosType } from "../types/types";

// Types
export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;

let initialState = {
	posts: [
		{ id: 1, message: "Hello,Im from Ukraine", likesCount: 0 },
		{ id: 2, message: "How do you do?", likesCount: 20 },
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: "" as string,
	newPostText: "" as string,
};

const profileReducer = (
	state: initialStateType = initialState,
	action: ActionsTypes
): initialStateType => {
	switch (action.type) {
		case "profile/ADD_POST": {
			let newPost = {
				id: 3,
				message: action.newPostText,
				likesCount: 5,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: "",
			};
		}
		case "profile/DELETE_POST": {
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.postId),
			};
		}

		case "profile/SET_USER_PROFILE": {
			return { ...state, profile: action.profile };
		}
		case "profile/SET_USER_STATUS": {
			return { ...state, status: action.status };
		}
		case "profile/SAVE_PHOTO": {
			return {
				...state,
				profile: { ...state.profile, photos: action.photos } as ProfileType,
			};
		}
		// case SAVE_PROFILE: {
		// 	return {}
		// }
		default:
			return state;
	}
};

// AC - ActionCreator
export const actions = {
	AddPostAc: (newPostText: string) =>
		({ type: "profile/ADD_POST", newPostText } as const),
	DeletePostAc: (postId: number) =>
		({ type: "profile/DELETE_POST", postId } as const),
	SetUserStatusAc: (status: string) =>
		({ type: "profile/SET_USER_STATUS", status } as const),
	SetUserProfileAc: (profile: ProfileType) =>
		({ type: "profile/SET_USER_PROFILE", profile } as const),
	SavePhotoAc: (photos: PhotosType) =>
		({ type: "profile/SAVE_PHOTO", photos } as const),
	SaveProfileAc: (profile: ProfileType) =>
		({ type: "profile/SAVE_PROFILE", profile } as const),
};

// TC - ThunkCreator

export const thunks = {
	ProfileTc: (userID: number): ThunkType =>
		async (dispatch) => {
			let data = await ProfileApi.getUsers(userID);
			dispatch(actions.SetUserProfileAc(data));
		},
	GetStatusTc: (userID: number): ThunkType =>
		async (dispatch) => {
			let data = await ProfileApi.getUsersStatus(userID);
			dispatch(actions.SetUserStatusAc(data));
		},
	UpDateStatusTc: (status: string): ThunkType =>
		async (dispatch) => {
			let data = await ProfileApi.UpDateStatusTc(status);
			if (data.resultCode === 0) {
				dispatch(actions.SetUserStatusAc(status));
			}
		},
	SavePhotoTc: (file: File): ThunkType =>
		async (dispatch) => {
			let data = await ProfileApi.savePhoto(file);
			if (data.resultCode === 0) {
				dispatch(actions.SavePhotoAc(data.data.photos));
			}
		},
	SaveProfileTc: (profile: ProfileType): ThunkType =>
		async (dispatch, getState) => {
			const userID = getState().auth.userId;
			const data = await ProfileApi.saveProfile(profile);
			if (data.resultCode === 0) {
				if (userID !== null) {
					dispatch(thunks.ProfileTc(userID));
				} else {
					console.log("error");
				}
			}
		},
};

export default profileReducer;
