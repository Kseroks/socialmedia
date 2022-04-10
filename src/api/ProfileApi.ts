import { instance, APIResponseType } from "./api";
import { PhotosType, ProfileType } from '../types/types';

type SavePhotoResponseDataType = { photos: PhotosType }

export const ProfileApi = {
	async getUsers(userId: number) {
		const res = await instance.get<ProfileType>(`profile/${userId}`);
		return res.data;
	},
	async getUsersStatus(userId: number) {
		const res = await instance.get<string>(`profile/status/${userId}`);
		return res.data;
	},
	async UpDateStatusTc(status: string) {
		const res = await instance.put(`profile/status`, { status: status });
		return res.data;
	},
	async savePhoto(PhotoFile: File) {
		let formData = new FormData();
		formData.append("image", PhotoFile);
		const res = await instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			}
		});
		return res.data;
	},
	async saveProfile(profile: ProfileType) {
		const res = await instance.put<APIResponseType>(`profile`, profile);
		return res.data;
	}
};