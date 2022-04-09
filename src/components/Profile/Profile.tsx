import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/Post/MyPostContainer";

export const Profile: React.FC<any> = ({ isOwner }) => {
	
	debugger;
	return (
		<div>
			<ProfileInfo
				isOwner={isOwner}
			/>
			<MyPostContainer />
		</div>
	);
}