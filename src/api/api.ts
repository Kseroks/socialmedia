import axios from "axios";

// Настройка запроса
const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "d8a0a6b5-f5dc-4aec-8c98-2fe1415fe1d3"
	},
	withCredentials: true,
});


export const UsersApi = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			})
	},

	follow(userId: number) {
		return instance.post(`follow/${userId}`);
	},

	unFollow(userId: number) {
		return instance.delete(`follow/${userId}`);
	},

};

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

export const HeaderApi = {
	getUsers() {
		return instance.get(`auth/me`);
	},

	login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
		return instance.post(`auth/login`, {
			email, password, rememberMe, captcha
		});
	},
	logOut() {
		return instance.delete(`auth/login`);
	},

}


export const SecurityApi = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`);
	}
}