import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { thunks } from "./redux/auth-reducer";
import { NavBar } from "./components/NavBar/NavBar";
import { Login } from "./components/Login/Login";
import { Header } from "./components/Header/Header";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ChatPage from "./pages/Chat/ChatPage";

import "antd/dist/antd.min.css";

import { Layout } from "antd";
import { RouteConst } from "./components/common/RouteConst";
import { NotFoundPage } from "./components/common/404";

export const App = () => {
  const { Content } = Layout;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunks.HeaderTc());
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Header />
        <Layout>
          <NavBar />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content className="site-layout-background"
              style={{padding: 24,margin: 0,minHeight: 280,}}>
              <Routes>
                <Route path={RouteConst.DIALOGS} element={<DialogsContainer />} />
                <Route path={RouteConst.PROFILE} element={<ProfileContainer />} />
                <Route path={RouteConst.USER_ID} element={<ProfileContainer />} />
                <Route path={RouteConst.USERS} element={<UsersContainer />}/>
                <Route path={RouteConst.CHAT} element={<ChatPage />} />
								<Route path={RouteConst.LOGIN} element={<Login />} />
								<Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />} />
								<Route path="*"
                  element={<Navigate to={RouteConst.NOT_FOUND_PAGE} />}/>
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};