import { instance, APIResponseType } from "./api";
import { UserType } from "../types/types";


export type GetItemsType = {
	items: Array<UserType>
	totalCount: number
}

export const UsersApi = {
	async getUsers(currentPage: number, pageSize: number) {
		const res = await instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`);
		return res.data;
	},
	async follow(userId: number) {
		const res = await instance.post<APIResponseType>(`follow/${userId}`);
		return res.data;
	},
	unFollow(userId: number) {
		return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>;
	},
};