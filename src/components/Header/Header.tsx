import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectors } from "../../selectors/auth-selectors";
import { thunks } from "../../redux/auth-reducer";
// import s from "./Header.module.css";

import { Layout, Avatar, Button, Typography } from "antd";

import { UserOutlined } from "@ant-design/icons";

export const Header: React.FC<any> = () => {
  const { Header } = Layout;
  const { Text } = Typography;

  const isAuth = useSelector(selectors.getIsAuthSel);
  const login = useSelector(selectors.getLoginSel);
  const dispatch = useDispatch();

  const logOut = () => {dispatch(thunks.LogOutTc());};

  return (
    <>
      <Header className="header">
        <div className="logo" />
        {/* <Row> */}
          {/* <Col span={20}> */}
            {/* <img
              className={s.logo}
              src="https://w7.pngwing.com/pngs/803/598/png-transparent-phoenix-logo-phoenix-red-bird-illustration-leaf-photography-mirror.png"
              alt="Logo"
            ></img> */}
          {/* </Col> */}
          {/* <Col span={4}> */}
            <Avatar  size={40} icon={<UserOutlined />} />
            {isAuth ? (
              <>
                <Text type="warning">{login} </Text>
                <Button onClick={logOut} ghost>
                  Log Out
                </Button>
              </>
            ) : (
              <Button ghost>
                <Link to={"/login"}>Login</Link>
              </Button>
            )}
          {/* </Col> */}
        {/* </Row> */}
      </Header>
    </>
  );
};
