import React from "react";
import avatar from "../../../../assets/photos/avatar.jpg";
import s from "./Post.module.css";

interface PropsType {
  message: string;
  likesCount: number;
}

export const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={s.item}>
      <img src={avatar} alt="222"></img>
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
};
