import { DialogsType, MessagesType } from '../types/types';
import { InferActionsTypes } from './redux-store'

// Types
export type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

let initialState = {
	dialogs: [
		{ id: 1, name: "Dima" },
		{ id: 2, name: "Ihor" },
		{ id: 3, name: "Anton" },
	] as Array<DialogsType>,
	messages: [
		{ id: 1, message: "Hello, How are you?" },
		{ id: 2, message: "How do you do?" },
		{ id: 3, message: "What is your name?" },
	] as Array<MessagesType>,
};

// Reducer
const dialogsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
	switch (action.type) {
		case "dialogs/SEND_MESSAGE":
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, { id: 10, message: body }],
			};
		default:
			return state;
	}
}

// Action Creators
export const actions = {
	sendMessageAc: (newMessageBody: string) => ({
		type: "dialogs/SEND_MESSAGE", newMessageBody
	} as const),
}

export default dialogsReducer;