import React from "react";
import "./App.css";
import Profile from "./components/Content/Content";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
// import SignUp from "./components/SignUp/SignUp";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";


const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
      <Route path="/profile" element={<Profile myPostsData = {props.myPostsData}/>}/> 
       <Route path="/messages" element={<Messages dialogsData = {props.dialogsData} messagesData = {props.messagesData}/>}/>
       <Route path="/news" element={<News/>}/>
       <Route path="/music" element={<Music/>}/>
       <Route path="/settings" element={<Settings/>}/>
       </Routes>
      </div>
      {/* <SignUp/> */} 
    </div>
    </BrowserRouter>
  );
};

export default App;
