import { useSelector } from "react-redux";
import { selectors } from "../../selectors/users-selectors";
import {Preloader} from "../common/Preloader/Preloader";
import {Users} from "./Users";

export const UsersContainer = () => {
  const isFetching = useSelector(selectors.getIsFetchingSel);

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};
export {}