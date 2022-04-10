import { useState,FC } from "react";
import { useDispatch,useSelector } from "react-redux";
import { SavePhotoTc } from "../../../redux/profile-reducer";
import { ProfileDataForm } from "./ProfileDataForm";
import { ProfileData } from "./ProfileData";
import { ProfileStatus } from "./ProfileStatus";
import { Preloader } from "../../common/Preloader/Preloader";
import {selectors} from "../../../selectors/profile-selectors";
import avatar from "../../../assets/photos/avatar.jpg";
import s from "./ProfileInfo.module.css";



export const ProfileInfo:FC<any> = ({ isOwner }) => {

  const [editMode, setEditMode] = useState<any>(false);
  const status = useSelector(selectors.getStatusSel);
  const profile = useSelector(selectors.getProfileSel);
  const dispatch = useDispatch();

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      dispatch(SavePhotoTc(e.target.files[0]));
    }
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <div>
          <h2>{profile.fullName}</h2>
          <img className={s.avatar} src={profile.photos.large || avatar}
            alt="userPhoto"/>
          {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
          <div>
            <ProfileStatus PrevStatus={status} />
          </div>
        </div>
        {editMode ? (
          <ProfileDataForm
            toEditMode={() => {setEditMode(false);}} profile={profile}/>
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
