import React from "react";
import { Link } from "react-router-dom";
import { UserType } from "../../types/types";
import avatar from "../../assets/photos/avatar.jpg";
import s from "./Users.module.css";

interface PropsType {
  user: UserType;
  followingInProgress: Array<number>;
  UnFollowTc: (userId: number) => void;
  FollowTc: (userId: number) => void;
}

export const User: React.FC<PropsType> = ({
  followingInProgress,
  UnFollowTc,
  FollowTc,
  user,
}) => {
  return (
    <div className={s.user}>
      <span>
        <div>
          <Link to={`/profile/${user.id}`}>
            <img
              className={s.wh}
              src={user.photos.small != null ? user.photos.small : avatar}
              alt="user avatar"
            />
          </Link>
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
      123
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
      </div>
  );
};