import React, { useEffect } from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotalUsersCountSel,
  getCurrentPageSel,
  getPageSizeSel,
  getUsersSel,
  getFollowingInProgressSel,
} from "../../redux/users-selectors";
import { GetUsersTc } from "../../redux/users-reducer";
import { actions } from "../../redux/users-reducer";

// useEffect масив "пуста зависимость" означає коли компонента вмонтуєтся

const Users = () => {
  const totalUsersCount = useSelector(getTotalUsersCountSel);
  const currentPage = useSelector(getCurrentPageSel);
  const pageSize = useSelector(getPageSizeSel);
  const users = useSelector(getUsersSel);
  const followingInProgress = useSelector(getFollowingInProgressSel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUsersTc(currentPage, pageSize));
  }, [currentPage, dispatch, pageSize]);

  const onPostChanged = (pageNumber: number) => {
    dispatch(GetUsersTc(pageNumber, pageSize));
  };

  const FollowTc = (userId: number) => {
    dispatch(actions.FollowAc(userId));
  };

  const UnFollowTc = (userId: number) => {
    dispatch(actions.UnFollowAc(userId));
  };

  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPostChanged={onPostChanged}
        currentPage={currentPage}
      />

      {users.map((user, i) => (
        <User
          user={user}
          key={i}
          followingInProgress={followingInProgress}
          UnFollowTc={UnFollowTc}
          FollowTc={FollowTc}
        />
      ))}
    </div>
  );
};

export default Users;
