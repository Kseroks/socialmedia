import { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { compose } from 'redux';
import { useMatch } from "react-router-dom";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPost } from "./MyPosts/MyPosts";
import { selectors } from "../../selectors/auth-selectors";
import { ProfileTc, GetStatusTc } from "../../redux/profile-reducer";
import  WithAuthRedirect  from "../../hoc/WithAuthRedirect";


const ProfileContainer: FC<any> = () => {
  const dispatch = useDispatch();
  const match = useMatch("/profile/:userId/");
  const authorizedUserId: any = useSelector(selectors.authorizedUserIdSel);

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

export default compose(WithAuthRedirect)(ProfileContainer);