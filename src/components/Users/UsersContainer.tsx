import { useSelector } from "react-redux";
import { getIsFetchingSel } from "../../redux/users-selectors";
import {Preloader} from "../common/Preloader/Preloader";
import {Users} from "./Users";


export const UsersContainer = () => {
  const isFetching = useSelector(getIsFetchingSel);

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};
export {}