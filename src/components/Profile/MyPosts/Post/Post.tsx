import React from "react";
import s from "./Post.module.css";
import avatar from "../../../../assets/photos/avatar.jpg";

interface PropsType  {
	message: string;
	likesCount: number;
}

const Post: React.FC<PropsType>= (props) => {

	return (
		<div className={s.item}>
			<img src={avatar} alt="222">
			</img>
			{props.message}
			<div><span>Like {props.likesCount}</span></div>
		</div>
	);
}

export default Post;