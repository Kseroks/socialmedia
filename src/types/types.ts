export type PostType = {
	id: number
	message: string
	likesCount: number
}
export type ContactsType = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}
export type PhotosType = {
	small: string | null
	large: string | null
}
export type ProfileType = {
	userId: number,
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	aboutMe: string
	contacts: ContactsType
	photos: PhotosType
}
export type UserType = {
	id: number
	name: string
	status: string
	photos: PhotosType
	followed: boolean
}

export type DialogsType = {
	id: number,
	name: string,
}

export type MessagesType = {
	id: number,
	message: string,
}