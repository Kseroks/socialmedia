import { actions } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
// import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
// import WithAuthRedirect from "../../hoc/WithAuthRedirect";

const mapStateToProps = (state:AppStateType) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const DialogsContainer = connect(mapStateToProps, {...actions})(Dialogs);

export default DialogsContainer;
// export default compose(
// 	WithAuthRedirect,
// 	connect(mapStateToProps, {...actions}),
// )(Dialogs);