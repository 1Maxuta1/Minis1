import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  MessagesPage: messagesReducer,
  Sidebar: sidebarReducer,
});
let store = configureStore({ reducer: reducers });

export default store;
