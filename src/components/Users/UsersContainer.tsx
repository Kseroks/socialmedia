// import React from "react";
// import Users from "./Users";
// import Preloader from "../common/Preloader/Preloader";
// import { connect } from "react-redux";
// import { UnFollowTc, FollowTc, SetCurrentPageAc, ToggleFollowingProgressAc, GetUsersTc, } from "../../redux/users-reducer.ts";
// import WithAuthRedirect from "../../hoc/WithAuthRedirect";
// import { compose } from "redux";
// import { getPageSizeSel, getUsersSel, getTotalUsersCountSel, getCurrentPageSel, getIsFetchingSel, getFollowingInProgress } from "../../redux/users-selectors";

// class UserContainer extends React.Component {
// 	componentDidMount() {
// 		let { currentPage, pageSize } = this.props;
// 		this.props.GetUsersTc(currentPage, pageSize);
// 	}

// 	onPostChanged = (pageNumber) => {
// 		this.props.SetCurrentPageAc(pageNumber);
// 		this.props.GetUsersTc(pageNumber, this.props.pageSize);
// 	}


// 	render() {
// 		return (
// 			<>
// 				{this.props.isFetching ? <Preloader /> : null}
// 				<Users
// 					totalUsersCount={this.props.totalUsersCount}
// 					pageSize={this.props.pageSize}
// 					currentPage={this.props.currentPage}
// 					onPostChanged={this.onPostChanged}
// 					users={this.props.users}
// 					FollowTc={this.props.FollowTc}
// 					UnFollowTc={this.props.UnFollowTc}
// 					ToggleFollowingProgressAc={this.props.ToggleFollowingProgressAc}
// 					followingInProgress={this.props.followingInProgress}
// 				/>
// 			</>
// 		)
// 	}
// }



// const mapStateToProps = (state) => {
// 	return {
// 		users: getUsersSel(state),
// 		pageSize: getPageSizeSel(state),
// 		totalUsersCount: getTotalUsersCountSel(state),
// 		currentPage: getCurrentPageSel(state),
// 		isFetching: getIsFetchingSel(state),
// 		followingInProgress: getFollowingInProgress(state),
// 	}

// }

// export default
// 	compose(
// 		WithAuthRedirect,
// 		connect(mapStateToProps,
// 			{ UnFollowTc, FollowTc, SetCurrentPageAc, ToggleFollowingProgressAc, GetUsersTc }),
// 	)(UserContainer)
