import { useState, FC } from "react";
import { useSelector } from "react-redux";
import { ProfileDataForm } from "./ProfileDataForm";
import { ProfileData } from "./ProfileData";
import { ProfileStatus } from "./ProfileStatus";
import { ProfileSel } from "../../../selectors/profile-selectors";
import { UserAvatar } from "./UserAvatar";
import { Row, Col } from "antd";
import s from "./ProfileInfo.module.css";


export const ProfileInfo: FC<any> = ({ isOwner, profile }) => {
  
  const [editMode, setEditMode] = useState<any>(false);
  const status = useSelector(ProfileSel.getStatus);

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
                <ProfileStatus isOwner={isOwner} PrevStatus={status} />
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
