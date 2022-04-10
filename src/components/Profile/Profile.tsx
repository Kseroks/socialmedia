import { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMatch } from "react-router-dom";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPost } from "./MyPosts/MyPosts";
import { authorizedUserIdSel } from "../../redux/auth-selectors";
import { ProfileTc, GetStatusTc } from "../../redux/profile-reducer";

export const Profile: FC<any> = () => {
  const authorizedUserId: any = useSelector(authorizedUserIdSel);
  const dispatch = useDispatch();
  const match = useMatch("/profile/:userId/");

  useEffect(() => {
    let userId = match ? match.params.userId : authorizedUserId;
    dispatch(ProfileTc(userId));
    dispatch(GetStatusTc(userId));
  }, [authorizedUserId, dispatch, match]);

  return (
    <div>
      <ProfileInfo isOwner={!match} />
      <MyPost />
    </div>
  );
};
