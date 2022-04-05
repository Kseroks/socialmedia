import { instance } from "./api";


export const ProfileApi = {
	getUsers(userId: number) {
		return instance.get(`profile/${userId}`);
	},
	getUsersStatus(userId: number) {
		return instance.get(`profile/status/${userId}`);
	},
	UpDateStatusTc(status: any) {
		return instance.put(`profile/status`, { status: status });
	},
	savePhoto(PhotoFile: any) {
		let formData = new FormData();
		formData.append("image", PhotoFile);
		return instance.put(`profile/photo`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			}
		});
	},
	saveProfile(profile: any) {
		return instance.put(`profile`, profile);
	}
}

