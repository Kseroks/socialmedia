import React from "react";
import s from "./Users.module.css";
import avatar from "../../assets/photos/avatar.jpg";
import { NavLink } from "react-router-dom";

const User = ({ followingInProgress, UnFollowTc, FollowTc, user }) => {
  // debugger;
  return (
    <div>
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              className={s.wh}
              src={user.photos.small != null ? user.photos.small : avatar}
              alt="user avatar"
            />
          </NavLink>
        </div>

        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                UnFollowTc(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                FollowTc(user.id);
              }}
            >
              Followed
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          {/* <div>{user.location.country}</div> */}
          {/* <div>{user.location.city}</div> */}
        </span>
      </span>
    </div>
  );
};

export default User;
