import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem//DialogItem";
import Message from "./Message/Message";
import DialogsMessage from "../Dialogs/DialogsMessage";

const Dialogs = (props) => {
	let state = props.dialogsPage;

	const dialogElement = state.dialogs.map((dialog, i) => {
		return <DialogItem key={i} name={dialog.name} id={dialog.id} />;
	})

	const messageElement = state.messages.map((message, i) => {
		return <Message key={i} message={message.message} />;
	})


	let addNewMessage = (values) => {
		props.sendMessage(values)
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