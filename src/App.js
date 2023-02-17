import React from "react";
import styles from "./App.module.css";
import Profile from "./components/Content/Content";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
// import SignUp from "./components/SignUp/SignUp";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import { Routes } from "react-router";

const App = (props) => {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <Nav />
      <div className={styles.app_wrapper_content}>
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
              />
            }
          />
          <Route
            path="/messages"
            element={
              <Messages
                MessagesData={props.state.MessagesData}
                newMessageBody={props.newMessageBody}
                state={props.state.MessagesPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      {/* <SignUp/> */}
    </div>
  );
};

export default App;
