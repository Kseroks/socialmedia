import { useState, FC } from "react";
import { useSelector } from "react-redux";
import { ProfileDataForm } from "./ProfileDataForm";
import { ProfileData } from "./ProfileData";
import { ProfileStatus } from "./ProfileStatus";
import { Preloader } from "../../common/Preloader/Preloader";
import { selectors } from "../../../selectors/profile-selectors";
import s from "./ProfileInfo.module.css";
import { UserAvatar } from "./UserAvatar";
import { Row, Col } from "antd";
export const ProfileInfo: FC<any> = ({ isOwner }) => {
  const [editMode, setEditMode] = useState<any>(false);
  const status = useSelector(selectors.getStatusSel);
  const profile = useSelector(selectors.getProfileSel);

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <Row>
          <Col span={12}>
            <div>
              <h2>{profile.fullName}</h2>
              <div>
                <UserAvatar profile={profile} isOwner={isOwner} />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <div>
                <ProfileStatus PrevStatus={status} />
              </div>
              {editMode ? (
                <ProfileDataForm
                  profile={profile}
                  toEditMode={() => {
                    setEditMode(false);
                  }}
                />
              ) : (
                <ProfileData
                  profile={profile}
                  isOwner={isOwner}
                  toEditMode={() => {
                    setEditMode(true);
                  }}
                />
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
