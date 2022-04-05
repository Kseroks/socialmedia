import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/Post/MyPostContainer";

const Profile = ({ profile, status, UpDateStatusTc, isOwner, SavePhotoTc, SaveProfileTc }) => {
	// debugger;
	return (
		<div>
			<ProfileInfo
				SaveProfileTc={SaveProfileTc}
				SavePhotoTc={SavePhotoTc}
				isOwner={isOwner}
				profile={profile}
				status={status}
				UpDateStatusTc={UpDateStatusTc} />
			<MyPostContainer />
		</div>
	);
}
export default Profile;