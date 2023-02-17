import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    ProfilePage: {
      myPostsData: [
        { id: 1, message: "Hi, it's me", likesCount: 2 },
        { id: 2, message: "Nah, you're fake", likesCount: 6 },
        { id: 3, message: "Maybe, he is real", likesCount: 4 },
      ],
      newPostText: "",
    },
    MessagesPage: {
      dialogsData: [
        { id: 1, name: "Max", nickname: "@_maxuta_" },
        { id: 2, name: "Timofey", nickname: "@tifomey.png" },
        { id: 3, name: "Danya", nickname: "@irritatingnator" },
        { id: 4, name: "Maria", nickname: "@kostamarina" },
        { id: 5, name: "Yehor", nickname: "@teengor" },
        { id: 6, name: "Anya", nickname: "@anya" },
      ],
      messagesData: [
        { id: 1, message: "Привіт, як ти?" },
        { id: 2, message: "Ого, а вона що?" },
        { id: 3, message: "No, i've just come to LA" },
        { id: 4, message: "Та ні, я завтра заберу" },
        { id: 5, message: "Yep, man, gotcha" },
        {
          id: 6,
          message: "Думаю, что можна будет в пятницу это отпраздновать",
        },
      ],
      newMessageBody: "",
    },
    Sidebar: {
      Friends: [{ id: 1 }],
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.MessagesPage = messagesReducer(
      this._state.MessagesPage,
      action
    );
    // this._state.DialogsData = dialogsReducer(this._state.MessagesPage, action);
    this._state.Sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
