import React, { useState } from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import avatar from "../../../assets/photos/avatar.jpg";
import ProfileDataForm from "./ProfileDataForm";
import { ProfileData } from "./ProfileData";
import { useSelector } from "react-redux";
import { SavePhotoTc } from "../../../redux/profile-reducer";
import {getStatusSel,getProfileSel} from "../../../redux/profile-selectors";

export const ProfileInfo: React.FC<any> = ({isOwner}) => {
	
  const [editMode, setEditMode] = useState<any>(false);
	const status = useSelector(getStatusSel);
  const profile = useSelector(getProfileSel);
  


  if (!profile) {
    return <Preloader />;
	}
	
  const onMainPhotoSelected = (event: any) => {
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
            <ProfileStatusWithHook status={status}/>
          </div>
        </div>
        {editMode ? (
          <ProfileDataForm toEditMode={() => {setEditMode(false);}}
						profile={profile}/>
        ) : (
          <ProfileData profile={profile} isOwner={isOwner}
            toEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
};
