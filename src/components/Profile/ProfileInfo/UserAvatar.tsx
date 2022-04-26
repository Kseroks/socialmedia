import React from "react";
import s from "./ProfileInfo.module.css";
import { thunks } from "../../../redux/profile-reducer";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";


export const UserAvatar: React.FC<any> = ({profile,isOwner,}) => {
	const dispatch = useDispatch();
  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      dispatch(thunks.SavePhotoTc(e.target.files[0]));
    }
  };

  return (
    <>
      <div className={s.avatar}>
          {profile.photos.large ?
            <img className={s.avatar} alt="userPhoto"
          src={profile.photos.large} />
          : <Avatar size={250} icon={<UserOutlined />} />}
      </div>

			{isOwner &&
				<div className={s.pd}>
					<input type="file" onChange={onMainPhotoSelected} />
				</div>
			}
    </>
  );
};


