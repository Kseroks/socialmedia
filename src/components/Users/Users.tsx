import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectors} from "../../selectors/users-selectors";
import { UnFollowTc, FollowTc,GetUsersTc } from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";
import { SearchUsers } from "./SearchUsers";
import {filterType} from "../../redux/users-reducer";

// useEffect масив "пуста зависимость" означає коли компонента вмонтуєтся

export const Users = () => {
  
  const totalUsersCount = useSelector(selectors.getTotalUsersCountSel);
  const currentPage = useSelector(selectors.getCurrentPageSel);
  const pageSize = useSelector(selectors.getPageSizeSel);
  const users = useSelector(selectors.getUsersSel);
  const followingInProgress = useSelector(selectors.getFollowingInProgressSel);
  const filter = useSelector(selectors.getFilterSel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUsersTc(currentPage, pageSize,filter));
  }, [currentPage, dispatch, pageSize,filter]);

  const onPostChanged = (pageNumber: number) => {
    dispatch(GetUsersTc(pageNumber, pageSize,filter));
  };

  const FollowTc1 = (userId: number) => {
    dispatch(FollowTc(userId));
  };

  const UnFollowTc1 = (userId: number) => {
    dispatch(UnFollowTc(userId));
  };

  const onFilterChanged = (filter:filterType) => {
    dispatch(GetUsersTc(1, pageSize,filter));
  }

  return (
    <div>

      <SearchUsers onFilterChanged={onFilterChanged}/>

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
