import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { selectors } from "../../selectors/users-selectors";
import { Preloader } from "../common/Preloader";
import { SearchUsers } from "./SearchUsers";
import { useEffect } from "react";
import { filterType, thunks } from "../../redux/users-reducer";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { User } from "./User";
import { Pagination,Row } from 'antd';

export const UsersContainer = () => {

  const isFetching = useSelector(selectors.getIsFetchingSel);
  const totalUsersCount = useSelector(selectors.getTotalUsersCountSel);
  const currentPage = useSelector(selectors.getCurrentPageSel);
  const pageSize = useSelector(selectors.getPageSizeSel);
  const users = useSelector(selectors.getUsersSel);
  const filter = useSelector(selectors.getFilterSel);
  const dispatch = useDispatch();

  let pageCount: number = Math.ceil(totalUsersCount / pageSize);

  useEffect(() => {
    dispatch(thunks.GetUsersTc(currentPage, pageSize, filter));
  }, [currentPage, dispatch, pageSize, filter]);

  const onPostChanged = (pageNumber: number) => {
    dispatch(thunks.GetUsersTc(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: filterType) => {
    dispatch(thunks.GetUsersTc(1, pageSize, filter));
  };

  return (
    <div>
      {isFetching ? <Preloader /> : null}
      <div>
        <SearchUsers onFilterChanged={onFilterChanged} />
      </div>
    <Row gutter={[16, 16]}>
        {users.map((user, i) => (
        <User user={user} key={i}/>))}
      </Row>
      
      <div>
      <Pagination
        defaultPageSize={pageSize}
        onChange={onPostChanged}
        defaultCurrent={1}
        total={pageCount}/>
        </div>
    </div>
  );
};

export default compose(WithAuthRedirect)(UsersContainer);
