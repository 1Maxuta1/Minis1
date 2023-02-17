const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT";

let initialState = {
  myPostsData: [
    { id: 1, message: "Hi, it's me", likesCount: 2 },
    { id: 2, message: "Nah, you're fake", likesCount: 6 },
    { id: 3, message: "Maybe, he is real", likesCount: 4 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.myPostsData.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      state.myPostsData.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});

export default profileReducer;
