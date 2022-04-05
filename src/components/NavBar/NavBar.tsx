import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = (props) => {
	// debugger;
	return (
		<nav className={s.nav}>
			<div className={s.item}><NavLink to="/profile">Profile</NavLink></div>
			<div className={s.item}><NavLink to="/dialogs">Message</NavLink></div>
			<div className={s.item}><NavLink to="/news">News</NavLink></div>
			<div className={s.item}><NavLink to="/users">Users</NavLink></div>
			<div className={s.item}><NavLink to="/music">Music</NavLink></div>
			<div className={s.item}><NavLink to="/setting">Setting</NavLink></div>
		</nav>
	);
}

export default NavBar;