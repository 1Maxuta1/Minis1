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
              // store={props.store}
              // addPost={store.addPost.bind(store)}
              // updateNewPostText={store.updateNewPostText.bind(store)}
              />
            }
          />
          <Route
            path="/messages"
            element={<MessagesContainer />}
            // store={props.store}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<FriendsContainer />} />
        </Routes>
      </div>
      {/* <SignUp/> */}
    </div>
  );
};

export default App;
