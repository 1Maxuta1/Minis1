const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT";
const NEW_MESSAGE_BODY = "NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    ProfilePage: {
      myPostsData: [
        { id: 1, message: "Hi, it's me", likesCount: 2 },
        { id: 2, message: "Nah, you're fake", likesCount: 6 },
        { id: 3, message: "Maybe, he is real", likesCount: 4 },
      ],
      newPostText: "Hi",
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
  subcribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {},
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: NEW_MESSAGE_BODY,
  body: body,
});
export default store;
window.store = store;

// _addPost() {
//   let newPost = {
//     id: 4,
//     message: this._state.ProfilePage.newPostText,
//     likesCount: 0,
//   };
//   this._state.ProfilePage.myPostsData.push(newPost);
//   this._state.ProfilePage.newPostText = "";
//   this._callSubscriber(this._state);
// },
// _updateNewPostText(newText) {
//   this._state.ProfilePage.newPostText = newText;
//   this._callSubscriber(this._state);
// },
