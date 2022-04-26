import React from "react";
import { Link } from "react-router-dom";
import { UserType } from "../../types/types";
import { UserOutlined } from "@ant-design/icons";

import s from "./Users.module.css";
import { Card, Col, Button,Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../selectors/users-selectors";
import { thunks } from "../../redux/users-reducer";

interface PropsType { user: UserType };

export const User: React.FC<PropsType> = ({ user }) => {
  
  const { Meta } = Card;
  const followingInProgress = useSelector(selectors.getFollowingInProgressSel);
  const dispatch = useDispatch();
  
  return (
    <Col span={8}>
      <Card
        style={{ width: 200 }}
        cover={
          <Link to={`/profile/${user.id}`}>
            <div>
              {user.photos.large ? (
                <img className={s.wh} alt="userPhoto" src={user.photos.large} />
              ) : (
                <Avatar size={200} icon={<UserOutlined />} />
              )}
            </div>
          </Link>
        }
        actions={[
          <>
            {user.followed ? (
              <Button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  dispatch(thunks.UnFollowTc(user.id));
                }}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  dispatch(thunks.FollowTc(user.id));
                }}
              >
                Followed
              </Button>
            )}
          </>,
        ]}
      >
        <Meta title={user.name} description={user.status} />
        <Meta description={"user.location.country"} />
        <Meta description={"user.location.city"} />
      </Card>
    </Col>
  );
};
