// import { sendMessageAc } from "../../redux/dialogs-reducer.ts";
// import Dialogs from "./Dialogs";
// import { connect } from "react-redux";
// import { compose } from "redux";
// import WithAuthRedirect from "../../hoc/WithAuthRedirect";

// // Двы функції які настроюють конект mapStateToProps mapDispatchToProps
// let mapStateToProps = (state) => {
// 	return {
// 		dialogsPage: state.dialogsPage,
// 	}
// }

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		sendMessage: (newMessageBody) => {
// 			dispatch(sendMessageAc(newMessageBody));
// 		}
// 	}
// }

// export default compose(
// 	WithAuthRedirect,
// 	connect(mapStateToProps, mapDispatchToProps),
// )(Dialogs);