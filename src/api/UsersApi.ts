
import { instance } from "./api";

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