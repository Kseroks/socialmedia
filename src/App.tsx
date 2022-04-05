import "./App.css";
import React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { HeaderTc } from "./redux/auth-reducer";
import { compose } from "redux";

class App extends React.Component<any, any> {
  componentDidMount() {
    this.props.HeaderTc();
  }

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
export default compose(connect(null, { HeaderTc }))(App);
