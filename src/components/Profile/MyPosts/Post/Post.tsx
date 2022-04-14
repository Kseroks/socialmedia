import { Avatar, Button } from "antd";
import React from "react";
import s from "./Post.module.css";
import { UserOutlined } from "@ant-design/icons";
interface PropsType {
  message: string;
  likesCount: number;
}

export const Post: React.FC<PropsType> = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <div>
        <Avatar size={50} icon={<UserOutlined />} />
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
