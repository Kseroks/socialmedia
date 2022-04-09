import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { LogOutTc } from "../../redux/auth-reducer";
import{AppStateType} from "../../redux/redux-store";
class HeaderContainer extends React.Component<any> {
	render() {
		return (<Header {...this.props} />)
	}
}

const mapStateToProps = (state: AppStateType)=> ({
	login: state.auth.login,
	isAuth: state.auth.isAuth,

})


export default connect(mapStateToProps, { LogOutTc })(HeaderContainer);