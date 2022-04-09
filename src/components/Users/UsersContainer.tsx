import React from "react";
// import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { getIsFetchingSel } from "../../redux/users-selectors";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

import { useSelector } from "react-redux";

// class UserContainer extends React.Component<any> {
//   componentDidMount() {
//     let { currentPage, pageSize } = this.props;
//     this.props.GetUsersTc(currentPage, pageSize);
//   }

//   onPostChanged = (pageNumber: number) => {
//     this.props.SetCurrentPageAc(pageNumber);
//     this.props.GetUsersTc(pageNumber, this.props.pageSize);
//   };

//   render() {
//     return (
//       <>
//         {this.props.isFetching ? <Preloader /> : null}
//         <Users
//           totalUsersCount={this.props.totalUsersCount}
//           pageSize={this.props.pageSize}
//           currentPage={this.props.currentPage}
//           onPostChanged={this.onPostChanged}
//           users={this.props.users}
//           FollowTc={this.props.FollowTc}
//           UnFollowTc={this.props.UnFollowTc}
//           followingInProgress={this.props.followingInProgress}
//         />
//       </>
//     );
//   }
// }


const UsersContainer = () => {
  const isFetching = useSelector(getIsFetchingSel);

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};
export default UsersContainer;
