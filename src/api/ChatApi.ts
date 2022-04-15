export const chatAPI = {
	start() {
		createChannel();
	},
	stop() {
		subscribers["messages-received"] = [];
		subscribers["status-changed"] = [];
		supportApi.cleanUp();
		ws?.close();
	},
	subscribe(
		eventName: EventsNamesType,
		callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType
	) {
		// @ts-ignore
		subscribers[eventName].push(callback);
		return () => {
			// @ts-ignore
			subscribers[eventName] = subscribers[eventName].filter(
				// @ts-ignore
				(s) => s !== callback
			);
		};
	},
	unsubscribe(
		eventName: EventsNamesType,
		callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType
	) {
		// @ts-ignore
		subscribers[eventName] = subscribers[eventName].filter(
			// @ts-ignore
			(s) => s !== callback
		);
	},
	sendMessage(message: string) {
		ws?.send(message);
	},
};

let ws: WebSocket | null = null;

const subscribers = {
	"messages-received": [] as MessagesReceivedSubscriberType[],
	"status-changed": [] as StatusChangedSubscriberType[],
};

const supportApi = {
	closeHandler: () => {
		supportApi.notifySubscribersAboutStatus("pending");
		setTimeout(createChannel, 3000);
	},
	messageHandler: (e: MessageEvent) => {
		const newMessages = JSON.parse(e.data);
		subscribers["messages-received"].forEach((s) => s(newMessages));
	},
	openHandler: () => {
		supportApi.notifySubscribersAboutStatus("ready");
	},
	errorHandler: () => {
		supportApi.notifySubscribersAboutStatus("error");
		console.error("REFRESH PAGE");
	},
	cleanUp: () => {
		ws?.removeEventListener("close", supportApi.closeHandler);
		ws?.removeEventListener("message", supportApi.messageHandler);
		ws?.removeEventListener("open", supportApi.openHandler);
		ws?.removeEventListener("error", supportApi.errorHandler);
	},
	notifySubscribersAboutStatus: (status: StatusType) => {
		subscribers["status-changed"].forEach((s) => s(status));
	},
};

function createChannel() {
	supportApi.cleanUp();
	ws?.close();
	ws = new WebSocket(
		"wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
	);
	supportApi.notifySubscribersAboutStatus("pending");
	ws.addEventListener("close", supportApi.closeHandler);
	ws.addEventListener("message", supportApi.messageHandler);
	ws.addEventListener("open", supportApi.openHandler);
	ws.addEventListener("error", supportApi.errorHandler);
}


type EventsNamesType = "messages-received" | "status-changed";
type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

export interface ChatMessageAPIType {
	message: string;
	photo: string;
	userId: number;
	userName: string;
}
export type StatusType = "pending" | "ready" | "error";


// const closeHandler = () => {
// 	notifySubscribersAboutStatus("pending");
// 	setTimeout(createChannel, 3000);
// };

// const messageHandler = (e: MessageEvent) => {
// 	const newMessages = JSON.parse(e.data);
// 	subscribers["messages-received"].forEach((s) => s(newMessages));
// };
// const openHandler = () => {
// 	notifySubscribersAboutStatus("ready");
// };
// const errorHandler = () => {
// 	notifySubscribersAboutStatus("error");
// 	console.error("REFRESH PAGE");
// };
// const cleanUp = () => {
// 	ws?.removeEventListener("close", closeHandler);
// 	ws?.removeEventListener("message", messageHandler);
// 	ws?.removeEventListener("open", openHandler);
// 	ws?.removeEventListener("error", errorHandler);
// };
// const notifySubscribersAboutStatus = (status: StatusType) => {
// 	subscribers["status-changed"].forEach((s) => s(status));
// };
