import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import {
  UserOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  MessageOutlined,
  SoundOutlined,
} from "@ant-design/icons";

export const NavBar = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
          <Menu.Item key="1">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dialogs">Message</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<UserOutlined />} title="Users">
          <Menu.Item key="3">
            <Link to="/users">Users</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<MessageOutlined />} title="Dialogs">
          <Menu.Item key="4">
            <Link to="/chat">Chat</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<UnorderedListOutlined />} title="News">
          <Menu.Item key="5">News</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<SoundOutlined />} title="Music">
          <Menu.Item key="6">Music</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" icon={<SettingOutlined />} title="Setting">
          <Menu.Item key="7">Setting</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
