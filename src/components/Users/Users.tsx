import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotalUsersCountSel,
  getCurrentPageSel,
  getPageSizeSel,
  getUsersSel,
  getFollowingInProgressSel,
} from "../../redux/users-selectors";
import { UnFollowTc, FollowTc,GetUsersTc } from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";


// useEffect масив "пуста зависимость" означає коли компонента вмонтуєтся

export const Users = () => {
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

  const FollowTc1 = (userId: number) => {
    dispatch(FollowTc(userId));
  };

  const UnFollowTc1 = (userId: number) => {
    dispatch(UnFollowTc(userId));
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
          UnFollowTc={UnFollowTc1}
          FollowTc={FollowTc1}
        />
      ))}
    </div>
  );
};
