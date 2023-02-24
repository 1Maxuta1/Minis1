import MyPosts from "./MyPosts";
import { addPostActionCreator } from "../../../States/profile-reducer";
import { updateNewPostActionCreator } from "../../../States/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    myPostsData: state.ProfilePage.myPostsData,
    newPostText: state.ProfilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
