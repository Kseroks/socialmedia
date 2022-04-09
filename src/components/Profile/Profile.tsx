import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/Post/MyPostContainer";
import {SaveProfileTc,SavePhotoTc,UpDateStatusTc} from "../../redux/profile-reducer";
import { useSelector} from "react-redux";
import{getProfileSel,getStatusSel} from "../../redux/profile-selectors";

const Profile: React.FC<any> = ({ isOwner }) => {
	
	const profile = useSelector(getProfileSel); 
    const status = useSelector(getStatusSel);
	debugger;
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