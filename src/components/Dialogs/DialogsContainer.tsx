import {useDispatch,useSelector} from "react-redux";
import { compose } from 'redux';
import {selectors} from "../../selectors/dialogs-selectors";
import { actions } from "../../redux/dialogs-reducer";
import {DialogsMessage} from "./DialogsMessage";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import s from "./Dialogs.module.css";

const DialogsContainer = () => {

	const dialogsPage = useSelector(selectors.getDialogsPageSel);
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
			<div className={s.dialogs}>
				<div className={s.dialogsItem}>{dialogElement}</div>
				<div className={s.messages}>
					<div>{messageElement}</div>
					<DialogsMessage addNewMessage={addNewMessage}/>
				</div>
			</div>
	)
};


export default compose(WithAuthRedirect)(DialogsContainer);