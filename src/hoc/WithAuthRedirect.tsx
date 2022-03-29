// import React from 'react'
// import { Route, Routes } from "react-router-dom";
// import Login from "../components/Login/Login";
// import { connect } from "react-redux";

// let mapStateToPropsRedirect = (state) => ({
// 	isAuth: state.auth.isAuth,
// });

// const WithAuthRedirect = (Component) => {
// 	class RedirectComponent extends React.Component {
// 		render() {
// 			if (!this.props.isAuth) {
// 				return (
// 					<Routes>
// 						<Route path="/" element={<Login />} />
// 					</Routes>
// 				);
// 			}
// 			return <Component {...this.props} />
// 		}
// 	}

// 	let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
// 	return ConnectedAuthRedirectComponent;
// }
// export default WithAuthRedirect;