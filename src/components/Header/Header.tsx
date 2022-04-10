import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLoginSel, getIsAuthSel } from "../../redux/auth-selectors";
import { LogOutTc } from "../../redux/auth-reducer";
import s from "./Header.module.css";

export const Header: React.FC<any> = () => {
  const isAuth = useSelector(getIsAuthSel);
  const login = useSelector(getLoginSel);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(LogOutTc());
  };

  return (
    <header className={s.header}>
      <img
        src="https://w7.pngwing.com/pngs/803/598/png-transparent-phoenix-logo-phoenix-red-bird-illustration-leaf-photography-mirror.png"
        alt="Logo"
      ></img>

      <div className={s.loginBlock}>
        {isAuth ? (
          <div>
            {login}
            <button onClick={logOut}>Log Out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};