import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

interface PropsType { id: number, name: string };

export const DialogItem: React.FC<PropsType>= ({ name, id }) => {
	return (
		<div className={`${s.dialog}`}>
			<img src="https://img2.freepng.ru/20180920/eoc/kisspng-clip-art-vector-graphics-computer-icons-image-profile-svg-png-icon-free-download-4468-9-onl-5ba33771e02506.8693811815374232179181.jpg" alt="222">
			</img>
			<NavLink to={`/dialogs/${id}`}>{name}</NavLink>
		</div>
	)
};