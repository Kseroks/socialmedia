export interface PostType {
	id: number
	message: string
	likesCount: number
}
export interface ContactsType {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}
export interface PhotosType {
	small: string | null
	large: string | null
}
export interface ProfileType {
	userId: number,
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	aboutMe: string
	contacts: ContactsType
	photos: PhotosType
}
export interface UserType {
	id: number
	name: string
	status: string
	photos: PhotosType
	followed: boolean
}
export interface DialogsType {
	id: number,
	name: string,
}
export interface MessagesType {
	id: number,
	message: string,
}

