import { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { compose } from "redux";
import { useMatch } from "react-router-dom";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPost } from "./MyPosts/MyPosts";
import { selectors } from "../../selectors/auth-selectors";
import { thunks } from "../../redux/profile-reducer";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { Preloader } from "../common/Preloader";
import {ProfileSel} from "../../selectors/profile-selectors";

const ProfileContainer: FC<any> = () => {
  const dispatch = useDispatch();
  const match = useMatch("/profile/:userId/");
  const authorizedUserId: any = useSelector(selectors.authorizedUserIdSel);
  const profile = useSelector(ProfileSel.getProfile);

  useEffect(() => {
    let userId = match ? match.params.userId : authorizedUserId;
    dispatch(thunks.ProfileTc(userId));
    dispatch(thunks.GetStatusTc(userId));
  }, [authorizedUserId, dispatch, match]);

  return (
    <div>
      {profile ? (
        <div>
          <ProfileInfo isOwner={!match} profile={profile} />
          <MyPost profile={profile} />
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default compose(WithAuthRedirect)(ProfileContainer);
