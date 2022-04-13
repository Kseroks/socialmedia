import { useSelector } from "react-redux";
import { compose } from "redux";
import { selectors } from "../../selectors/users-selectors";
import {Preloader} from "../common/Preloader/Preloader";
import { Users } from "./Users";
import  WithAuthRedirect  from "../../hoc/WithAuthRedirect";

const UsersContainer = () => {
  const isFetching = useSelector(selectors.getIsFetchingSel);
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};

export default compose(WithAuthRedirect)(UsersContainer);
