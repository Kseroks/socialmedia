import { Avatar, Button } from "antd";
import React from "react";
import s from "./Post.module.css";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { ProfileSel } from "../../../../selectors/profile-selectors";
// interface PropsType {
//   message: string;
//   likesCount: number;
// }

export const Post: React.FC<any> = ({ message, likesCount }) => {
  const profile: any= useSelector(ProfileSel.getProfile);

  return (
    <div className={s.item}>
      <div className={s.avatar}>
        {profile.photos.small ? <img className={s.avatar} alt="userPhoto"
          src={profile.photos.small} />
          : <Avatar size={50} icon={<UserOutlined />} />}
      </div>
      <div className={s.textPost}>
        <h4>{message}</h4>
        <p>
          <Button>Like</Button> {likesCount}
        </p>
      </div>
    </div>
  );
};
