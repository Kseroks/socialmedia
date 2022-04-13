import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderTc } from "./redux/auth-reducer";
import { NavBar } from "./components/NavBar/NavBar";
import { Login } from "./components/Login/Login";
import { Header } from "./components/Header/Header";
import  UsersContainer  from "./components/Users/UsersContainer";
import  Dialogs  from "./components/Dialogs/Dialogs";
import  Profile  from "./components/Profile/Profile";
import "./App.css";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HeaderTc());
  }, [dispatch]);

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
            <Route path="/users/*" element={<UsersContainer />}/>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
