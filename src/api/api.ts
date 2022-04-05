import axios from "axios";

// Настройка запроса
export const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "d8a0a6b5-f5dc-4aec-8c98-2fe1415fe1d3"
	},
	withCredentials: true,
});


