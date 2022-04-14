import React from "react";
import s from "./ProfileInfo.module.css";
import { SavePhotoTc } from "../../../redux/profile-reducer";
import avatar from "../../../assets/photos/avatar.jpg";

import { useDispatch } from "react-redux";


export const UserAvatar: React.FC<any> = ({profile,isOwner,}) => {
	const dispatch = useDispatch();
  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      dispatch(SavePhotoTc(e.target.files[0]));
    }
  };

  return (
    <>
      <img className={s.avatar} alt="userPhoto" src={profile.photos.large || avatar}/>
			{isOwner &&
				<div className={s.pd}>
					<input type="file" onChange={onMainPhotoSelected} />
				</div>
			}
    </>
  );
};


