const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

// Types

type dialogType = {
	id: number,
	name: string,
}

type messagesType = {
	id: number,
	message: string,
}
type sendMessageAcType = {
	type: typeof SEND_MESSAGE,
	newMessageBody: string,
}

// Types End

let initialState = {
	dialogs: [
		{ id: 1, name: "Dima" },
		{ id: 2, name: "Ihor" },
		{ id: 3, name: "Anton" },
	] as Array<dialogType>,
	messages: [
		{ id: 1, message: "Hello, How are you?" },
		{ id: 2, message: "How do you do?" },
		{ id: 3, message: "What is your name?" },
	] as Array<messagesType>,
};


// Reducer
const dialogsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SEND_MESSAGE:
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

export const sendMessageAc = (newMessageBody: string): sendMessageAcType => ({ type: SEND_MESSAGE, newMessageBody });

// Action Creators END

export default dialogsReducer;