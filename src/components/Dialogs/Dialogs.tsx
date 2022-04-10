import {useDispatch,useSelector} from "react-redux";
import {getDialogsPageSel} from "../../redux/dialogs-selectors";
import { actions } from "../../redux/dialogs-reducer";
import {DialogsMessage} from "../Dialogs/DialogsMessage";
import {DialogItem} from "./DialogItem//DialogItem";
import {Message} from "./Message/Message";
import s from "./Dialogs.module.css";

export const Dialogs = () => {

	const dialogsPage = useSelector(getDialogsPageSel);
	const dispatch = useDispatch();

	const dialogElement = dialogsPage.dialogs.map((dialog, i) => {
		return <DialogItem key={i} name={dialog.name} id={dialog.id} />;
	})

	const messageElement = dialogsPage.messages.map((message, i) => {
		return <Message key={i} message={message.message} />;
	})

	const addNewMessage = (values: string) => {
		dispatch(actions.sendMessageAc(values));
	}

	return (
		<>
			<div className={s.dialogs}>
				<div className={s.dialogsItem}>{dialogElement}</div>
				<div className={s.messages}>
					<div>{messageElement}</div>
					<DialogsMessage addNewMessage={addNewMessage}/>
				</div>
			</div>
		</>
	)
};