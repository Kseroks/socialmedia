// import * as axios from "axios";

// // Настройка запроса
// const instance = axios.create({
// 	baseURL: "https://social-network.samuraijs.com/api/1.0/",
// 	headers: {
// 		"API-KEY": "9ee65da5-9292-4c7e-9e38-6d18417d9e2f"
// 	},
// 	withCredentials: true,
// });


// export const UsersApi = {
// 	getUsers(currentPage, pageSize) {
// 		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
// 			.then(response => {
// 				return response.data;
// 			})
// 	},

// 	follow(userId) {
// 		return instance.post(`follow/${userId}`);
// 	},

// 	unFollow(userId) {
// 		return instance.delete(`follow/${userId}`);
// 	},

// };

// export const ProfileApi = {
// 	getUsers(userId) {
// 		return instance.get(`profile/${userId}`);
// 	},
// 	getUsersStatus(userId) {
// 		return instance.get(`profile/status/${userId}`);
// 	},
// 	UpDateStatusTc(status) {
// 		return instance.put(`profile/status`, { status: status });
// 	},
// 	savePhoto(PhotoFile) {
// 		let formData = new FormData();
// 		formData.append("image", PhotoFile);
// 		return instance.put(`profile/photo`, formData, {
// 			headers: {
// 				"Content-Type": "multipart/form-data",
// 			}
// 		});
// 	},
// 	saveProfile(profile) {
// 		return instance.put(`profile`, profile);
// 	}
// }

// export const HeaderApi = {
// 	getUsers() {
// 		return instance.get(`auth/me`);
// 	},

// 	login(email, password, rememberMe = false, captcha = null) {
// 		return instance.post(`auth/login`, {
// 			email, password, rememberMe, captcha
// 		});
// 	},
// 	logOut() {
// 		return instance.delete(`auth/login`);
// 	},

// }


// export const SecurityApi = {
// 	getCaptchaUrl() {
// 		return instance.get(`security/get-captcha-url`);
// 	}
// }