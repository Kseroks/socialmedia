import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderTc } from "./redux/auth-reducer";
import { NavBar } from "./components/NavBar/NavBar";
import { Login } from "./components/Login/Login";
import { Header } from "./components/Header/Header";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


// import "./App.css";
import "antd/dist/antd.min.css";

import { Layout} from "antd";


export const App = () => {
  const { Content} = Layout;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HeaderTc());
  }, [dispatch]);

  return (
    <Router>
      <Layout>
      <Header/>
        <Layout>
            <NavBar/>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/profile/*" element={<ProfileContainer />} />
                <Route path="/profile/:userId" element={<ProfileContainer />} />
                <Route path="/users/*" element={<UsersContainer />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

// <Router>
//   <div className="app-wrapper">
//     <Header />
//     <NavBar />
//     <div className="app-wrapper-content">
//       <Routes>
//         <Route path="/dialogs/*" element={<DialogsContainer />} />
//         <Route path="/profile/*" element={<ProfileContainer />} />
//         <Route path="/profile/:userId" element={<ProfileContainer />} />
//         <Route path="/users/*" element={<UsersContainer />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </div>
//   </div>
// </Router>
