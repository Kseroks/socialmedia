import { ProfileApi } from "../api/ProfileApi";
import { BaseThunkType, InferActionsTypes } from './redux-store'
import { ProfileType, PostType, PhotosType } from "../types/types";


// Types
export type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

let initialState = {
	posts: [
		{ id: 1, message: "Hello,Im from Ukraine", likesCount: 0, },
		{ id: 2, message: "How do you do?", likesCount: 20, },
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: "" as string,
	newPostText: "" as string,
}

const profileReducer = (state = initialState, action: any): initialStateType => {
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
			return { ...state, posts: state.posts.filter(post => post.id !== action.postId) };
		}

		case "profile/SET_USER_PROFILE": {
			return { ...state, profile: action.profile }
		}
		case "profile/SET_USER_STATUS": {
			return { ...state, status: action.status }
		}
		case "profile/SAVE_PHOTO": {
			return {
				...state, profile: { ...state.profile, photos: { ...state.profile.photos, large: action.photo } }
			}
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
	AddPostAc: (newPostText: string) => ({ type: "profile/ADD_POST", newPostText } as const),
	DeletePostAc: (postId: number) => ({ type: "profile/DELETE_POST", postId } as const),
	SetUserStatusAc: (status: string) => ({ type: "profile/SET_USER_STATUS", status } as const),
	SetUserProfileAc: (profile: ProfileType) => ({ type: "profile/SET_USER_PROFILE", profile } as const),
	SavePhotoAc: (photos: PhotosType) => ({ type: "profile/SAVE_PHOTO", photos } as const),
	SaveProfileAc: (profile: ProfileType) => ({ type: "profile/SAVE_PROFILE", profile } as const),
}


// TC - ThunkCreator
export const ProfileTc = (userID: number): ThunkType => async (dispatch) => {
	let response = await ProfileApi.getUsers(userID);
	dispatch(actions.SetUserProfileAc(response.data));
}
export const GetStatusTc = (userID: number): ThunkType => async (dispatch) => {
	let response = await ProfileApi.getUsersStatus(userID);
	dispatch(actions.SetUserStatusAc(response.data));
}
export const UpDateStatusTc = (status: string): ThunkType => async (dispatch) => {
	let response = await ProfileApi.UpDateStatusTc(status);
	if (response.data.resultCode === 0) {
		dispatch(actions.SetUserStatusAc(status));
	}
}
export const SavePhotoTc = (file: any): ThunkType => async (dispatch) => {
	let response = await ProfileApi.savePhoto(file);
	dispatch(actions.SavePhotoAc(response.data.photos));
}
export const SaveProfileTc = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
	const userID = getState().auth.userId;
	let response = await ProfileApi.saveProfile(profile);
	if (response.data.resultCode === 0) {
		dispatch(ProfileTc(userID));
	}
}

export default profileReducer;