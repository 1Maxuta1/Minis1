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

  addPost() {
    let newPost = {
      id: 4,
      message: this._state.ProfilePage.newPostText,
      likesCount: 0,
    };
    this._state.ProfilePage.myPostsData.push(newPost);
    this._state.ProfilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.ProfilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  dispatchEvent(action) {},
};

export default store;
window.store = store;
