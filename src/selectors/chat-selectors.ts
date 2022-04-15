import { AppStateType } from "../redux/redux-store";

export const selectors = {
	getStatus: (state: AppStateType) => {
		return state.chat.status;
	},
	getMessages: (state: AppStateType) => {
		return state.chat.messages;
	}
}