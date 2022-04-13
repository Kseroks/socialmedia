import { instance, APIResponseType, GetItemsType } from "./api";



export const UsersApi = {
  async getUsers(currentPage: number, pageSize: number, term: string = "", friend: null | boolean = null,) {
    const res = await instance.get<GetItemsType>(
      `users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`)
    );
    return res.data;
  },
  async follow(userId: number) {
    const res = await instance.post<APIResponseType>(`follow/${userId}`);
    return res.data;
  },
  unFollow(userId: number) {
    return instance
      .delete(`follow/${userId}`)
      .then((res) => res.data) as Promise<APIResponseType>;
  },
};
