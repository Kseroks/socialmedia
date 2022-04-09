import React from "react";
import { ProfileTc } from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import { GetStatusTc } from "../../redux/profile-reducer";
import { useSelector, useDispatch } from "react-redux";
import { useMatch } from 'react-router-dom';
import { useEffect } from "react";
import { authorizedUserIdSel } from "../../redux/auth-selectors";

// class ProfileContainer extends React.Component<any> {

//   refreshProfile() {
//     let userId = this.props.match
//       ? this.props.match.params.userId
//       : this.props.authorizedUserId;
//     this.props.ProfileTc(userId);
//     this.props.GetStatusTc(userId);
//   }

//   componentDidMount() {
//     this.refreshProfile();
//   }

//   componentDidUpdate(prevProps: any) {
//     if (
//       this.props.match &&
//       this.props.match.params.userId !== prevProps.match.params.userId
//     ) {
//       this.refreshProfile();
//     } else if (!this.props.match && this.props.match !== prevProps.match) {
//       this.refreshProfile();
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Profile
//           {...this.props}
//           SaveProfileTc={this.props.SaveProfileTc}
//           SavePhotoTc={this.props.SavePhotoTc}
//           isOwner={!this.props.match}
//           profile={this.props.profile}
//           status={this.props.status}
//           UpDateStatusTc={this.props.UpDateStatusTc}
//         />
//       </div>
//     );
//   }
// }

export const ProfileContainer: React.FC<any> = () => {
  const authorizedUserId:any = useSelector(authorizedUserIdSel);
  const dispatch = useDispatch();
  const match:any = useMatch('/profile/:userId/');

  useEffect(() => {
    let userId = match ? match.params.userId : authorizedUserId;
    dispatch(ProfileTc(userId));
    dispatch(GetStatusTc(userId));
  }, [authorizedUserId, dispatch, match]);
  return (
    <div>
      <Profile isOwner={!match} />
    </div>
  );
};
// export default compose(WithAuthRedirect, withRouter)(ProfileContainer);
