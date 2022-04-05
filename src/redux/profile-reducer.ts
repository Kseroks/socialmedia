import { ProfileApi } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_USER_STATUS = "profile/SET_USER_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO = "profile/SAVE_PHOTO";
const SAVE_PROFILE = "profile/SAVE_PROFILE";

// Types
type PostType = {
	id: number
	message: string
	likesCount: number
}
type ContactsType = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}
type PhotosType = {
	small: string | null
	large: string | null
}
type ProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	aboutMe: string
	contacts: ContactsType
	photos: PhotosType
}
export type initialStateType = typeof initialState;
type AddPostAcType = {
	type: typeof ADD_POST
	newPostText: string
}
type DeletePostAcType = {
	type: typeof DELETE_POST
	postId: number
}
type SetUserStatusAcType = {
	type: typeof SET_USER_STATUS
	status: string
}
type SetUserProfileAcType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}
type SavePhotoAcType = {
	type: typeof SAVE_PHOTO
	photos: PhotosType
}
type SaveProfileAcType = {
	type: typeof SAVE_PROFILE
	profile: ProfileType
}


let initialState = {
	posts: [
		{ id: 1, message: "Hello,Im from Ukraine", likesCount: 0, },
		{ id: 2, message: "How do you do?", likesCount: 20, },
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: "",
	newPostText: "",
}

const profileReducer = (state = initialState, action: any): initialStateType => {
	switch (action.type) {
		case ADD_POST: {
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
		case DELETE_POST: {
			return { ...state, posts: state.posts.filter(post => post.id !== action.postId) };
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}
		case SET_USER_STATUS: {
			return { ...state, status: action.status }
		}
		case SAVE_PHOTO: {
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

export const AddPostAc = (newPostText: string): AddPostAcType => ({ type: ADD_POST, newPostText });

export const DeletePostAc = (postId: number): DeletePostAcType => ({ type: DELETE_POST, postId })

export const SetUserStatusAc = (status: string): SetUserStatusAcType => ({ type: SET_USER_STATUS, status });

export const SetUserProfileAc = (profile: ProfileType): SetUserProfileAcType => ({ type: SET_USER_PROFILE, profile });

export const SavePhotoAc = (photos: PhotosType): SavePhotoAcType => ({ type: SAVE_PHOTO, photos });

export const SaveProfileAc = (profile: ProfileType): SaveProfileAcType => ({ type: SAVE_PROFILE, profile });





// TC - ThunkCreator

export const ProfileTc = (userID: number) => async (dispatch: any) => {
	let response = await ProfileApi.getUsers(userID);
	dispatch(SetUserProfileAc(response.data));
}


export const GetStatusTc = (userID: number) => async (dispatch: any) => {
	let response = await ProfileApi.getUsersStatus(userID);
	dispatch(SetUserStatusAc(response.data));
}

export const UpDateStatusTc = (status: string) => async (dispatch: any) => {
	let response = await ProfileApi.UpDateStatusTc(status);
	if (response.data.resultCode === 0) {
		dispatch(SetUserStatusAc(status));
	}
}

export const SavePhotoTc = (file: any) => async (dispatch: any) => {
	let response = await ProfileApi.savePhoto(file);
	dispatch(SavePhotoAc(response.data.photos));
}

export const SaveProfileTc = (profile: ProfileType) => async (dispatch: any, getState: any) => {
	const userID = getState().auth.userId;
	let response = await ProfileApi.saveProfile(profile);
	if (response.data.resultCode === 0) {
		dispatch(ProfileTc(userID));
	}
}

export default profileReducer;