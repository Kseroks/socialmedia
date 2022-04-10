import { AppStateType } from "../redux/redux-store";

export const selectors = {
	getDialogsPageSel: (state: AppStateType) => {
		return state.dialogsPage;
	}
};