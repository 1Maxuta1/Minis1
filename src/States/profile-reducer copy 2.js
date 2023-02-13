const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT";
const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: this._state.ProfilePage.myPostsData.length + 1,
      message: this._state.ProfilePage.newPostText,
      likesCount: 0,
    };
    _state.ProfilePage.myPostsData.push(newPost);
    _state.ProfilePage.newPostText = "";
    _callSubscriber(_state);
  } else if (action.type === UPDATE_NEW_POST) {
    this._state.ProfilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
  }
  return state;
};
