import "./App.css";
import React from "react";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {NavBar} from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { HeaderTc } from "./redux/auth-reducer";
import { compose } from "redux";
import { UsersContainer } from "./components/Users/UsersContainer";
import {Profile} from "./components/Profile/Profile";


class App extends React.Component<any, any> {
  componentDidMount() {
    this.props.HeaderTc();
  }

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/dialogs/*" element={<Dialogs />} />
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/profile/:userId" element={<Profile />} />
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
