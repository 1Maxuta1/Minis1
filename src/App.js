import React from "react";
import styles from "./App.module.css";
import Profile from "./components/Content/Content";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
// import SignUp from "./components/SignUp/SignUp";
import MessagesContainer from "./components/Messages/MessagesContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { Hook } from "./testHooks";
import PrivateRoute from "./auth/PrivateRoute";
import { Auth } from "./auth/auth";
import { AuthContextProvider } from "./auth/authContext";

const App = (props) => {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <Nav />
      <div className={styles.app_wrapper_content}>
      <AuthContextProvider>
        <Routes>
        <Route path="/"
          element={<Auth/>}
        />
          <PrivateRoute
            path="/profile"
            element={
              <Profile
              />
            }
          />
          <PrivateRoute
            path="/messages"
            element={<MessagesContainer />}
            // store={props.store}
          />
          <PrivateRoute path="/news" element={<News />} />
          <PrivateRoute path="/music" element={<Music />} />
          <PrivateRoute path="/settings" element={<Settings />} />
          <PrivateRoute path="/friends" element={<FriendsContainer />} />
          <PrivateRoute path="/testhook" element={<Hook />} />
        </Routes>
        </AuthContextProvider>
      </div>
      {/* <SignUp/> */}
    </div>
  );
};

export default App;
