import { useSelector } from "react-redux";
import { compose } from "redux";
import { selectors } from "../../selectors/users-selectors";
import {Preloader} from "../common/Preloader/Preloader";
import  WithAuthRedirect  from "../../hoc/WithAuthRedirect";
import { Users } from "./Users";

const UsersContainer = () => {
  const isFetching = useSelector(selectors.getIsFetchingSel);

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};

export default compose<React.ComponentType>(WithAuthRedirect)(UsersContainer);
