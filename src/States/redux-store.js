import { combineReducers, configureStore } from "@reduxjs/toolkit";
import friendsReducer from "./friends-reducer ";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  ProfilePage: profileReducer,
  MessagesPage: messagesReducer,
  FriendsPage: friendsReducer,
  Sidebar: sidebarReducer,
});
let store = configureStore({
  reducer: reducers,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: false,
  //     serializableCheck: false,
  //   }),
});

export default store;
