import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { selectors } from "../../selectors/users-selectors";
import { Preloader } from "../common/Preloader/Preloader";
import {User} from "./User";
import { Paginator } from "../common/Paginator/Paginator";
import { SearchUsers } from "./SearchUsers";
import { useEffect } from "react";
import { filterType, thunks } from "../../redux/users-reducer";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import s from "./Users.module.css";

export const UsersContainer = () => {

  const isFetching = useSelector(selectors.getIsFetchingSel);
  const totalUsersCount = useSelector(selectors.getTotalUsersCountSel);
  const currentPage = useSelector(selectors.getCurrentPageSel);
  const pageSize = useSelector(selectors.getPageSizeSel);
  const users = useSelector(selectors.getUsersSel);
  const followingInProgress = useSelector(selectors.getFollowingInProgressSel);
  const filter = useSelector(selectors.getFilterSel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.GetUsersTc(currentPage, pageSize, filter));
  }, [currentPage, dispatch, pageSize, filter]);

  const onPostChanged = (pageNumber: number) => {
    dispatch(thunks.GetUsersTc(pageNumber, pageSize, filter));
  };

  const FollowTc1 = (userId: number) => {
    dispatch(thunks.FollowTc(userId));
  };

  const UnFollowTc1 = (userId: number) => {
    dispatch(thunks.UnFollowTc(userId));
  };

  const onFilterChanged = (filter: filterType) => {
    dispatch(thunks.GetUsersTc(1, pageSize, filter));
  };

  return (
    <div>
      {isFetching ? <Preloader /> : null}

      <SearchUsers onFilterChanged={onFilterChanged} />

      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPostChanged={onPostChanged}
        currentPage={currentPage}
      />

      <div className={s.wrapperDiv}>
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
    </div>
  );
};

export default compose(WithAuthRedirect)(UsersContainer);
