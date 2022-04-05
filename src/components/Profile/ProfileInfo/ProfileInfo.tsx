import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import avatar from "../../../assets/photos/avatar.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
	profile,
	status,
	UpDateStatusTc,
	isOwner,
	SavePhotoTc,
	SaveProfileTc,
}) => {
	const [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader />;
	}
	const onMainPhotoSelected = (event) => {
		if (event.target.files.length) {
			SavePhotoTc(event.target.files[0]);
		}
	};
	return (
		<div>
			{/* <div>
				<img src='https://cdn.pixabay.com/photo/2021/10/27/11/33/kids-things-6747073__480.jpg' alt="222"></img>
			</div> */}
			<div className={s.descriptionBlock}>
				<div>
					<h2>{profile.fullName}</h2>
					<img
						className={s.avatar}
						src={profile.photos.large || avatar}
						alt="userPhoto"
					/>
					{isOwner && <input type="file" onChange={onMainPhotoSelected} />}
					<div>
						<ProfileStatusWithHook
							status={status}
							UpDateStatusTc={UpDateStatusTc}
						/>
					</div>
				</div>
				{editMode ? (
					<ProfileDataForm
						toEditMode={() => { setEditMode(); }}
						SaveProfileTc={SaveProfileTc}
						profile={profile} />
				) : (
					<ProfileData
						toEditMode={() => {
							setEditMode(true);
						}}
						profile={profile}
						isOwner={isOwner}
					/>
				)}
			</div>
		</div>
	);
};

const ProfileData = ({ profile, isOwner, toEditMode }) => {
	return (
		<div>
			<div>{isOwner && <button onClick={toEditMode}>edit</button>}</div>
			<p>{profile.aboutMe}</p>
			<p>
				Состояния роботи: {profile.lookingForAJob ? "Да" : "Нет"}
			</p>
			<p>
				{profile.lookingForAJobDescription}
			</p>
			<div>
				Contacts:
				{Object.keys(profile.contacts).map((key, j) => {
					return (
						<Contact
							key={j}
							contactTitle={key}
							contactValue={profile.contacts[key]}
						/>
					);
				})}
			</div>
		</div>
	);
};

const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div>
			<b>{contactTitle}</b>:{contactValue}
		</div>
	);
};

export default ProfileInfo;