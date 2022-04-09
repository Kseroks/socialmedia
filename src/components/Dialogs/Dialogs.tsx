import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem//DialogItem";
import Message from "./Message/Message";
import DialogsMessage from "../Dialogs/DialogsMessage";
import { initialStateType } from "../../redux/dialogs-reducer";
import { actions } from "../../redux/dialogs-reducer";

type PropsType = {
	dialogsPage: initialStateType
}


const Dialogs: React.FC<PropsType>= (props) => {
	let state = props.dialogsPage;

	const dialogElement = state.dialogs.map((dialog, i) => {
		return <DialogItem key={i} name={dialog.name} id={dialog.id} />;
	})

	const messageElement = state.messages.map((message, i) => {
		return <Message key={i} message={message.message} />;
	})


	let addNewMessage = (values:any) => {
		actions.sendMessageAc(values.newMessageBody);
	}


	return (
		<>
			<div className={s.dialogs}>
				<div className={s.dialogsItem}>{dialogElement}</div>
				<div className={s.messages}>
					<div>{messageElement}</div>
					<DialogsMessage addNewMessage={addNewMessage}
					/>
				</div>
			</div>
		</>
	)
};
export default Dialogs;