// import React from 'react';
// import { connect } from 'react-redux';
// import { ProfileTc } from '../../redux/profile-reducer.ts';
// import Profile from './Profile';
// import { compose } from "redux";
// import withRouter from "../../hoc/withRouter";
// import WithAuthRedirect from "../../hoc/WithAuthRedirect";
// import { GetStatusTc, UpDateStatusTc, SavePhotoTc, SaveProfileTc } from "../../redux/profile-reducer.ts";
// class ProfileContainer extends React.Component {

//     refreshProfile() {
//         let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;
//         this.props.ProfileTc(userId);
//         this.props.GetStatusTc(userId)
//     }

//     componentDidMount() {
//         this.refreshProfile();
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (this.props.match && this.props.match.params.userId !== prevProps.match.params.userId) {
//             this.refreshProfile();
//         } else if (!this.props.match && this.props.match !== prevProps.match) {
//             this.refreshProfile();
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Profile
//                     {...this.props}
//                     SaveProfileTc={this.props.SaveProfileTc}
//                     SavePhotoTc={this.props.SavePhotoTc}
//                     isOwner={!this.props.match}
//                     profile={this.props.profile}
//                     status={this.props.status}
//                     UpDateStatusTc={this.props.UpDateStatusTc} />
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//     profile: state.profilePage.profile,
//     status: state.profilePage.status,
//     authorizedUserId: state.auth.userId,
// });

// export default
//     compose(
//         WithAuthRedirect,
//         connect(mapStateToProps, { SavePhotoTc, ProfileTc, GetStatusTc, UpDateStatusTc, SaveProfileTc }), withRouter,
//     )(ProfileContainer);