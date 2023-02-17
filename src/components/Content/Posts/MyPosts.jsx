import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../States/profile-reducer";
import { updateNewPostActionCreator } from "../../../States/profile-reducer";

const MyPosts = (props) => {
  let PostsElement = props.myPostsData.map((post) => (
    <Post
      message={post.message}
      id={post.id}
      likesCount={post.likesCount}
      src="/img/avatar1.jpg"
    />
  ));

  let newPostElement = React.createRef();
  // let addUser = React.createRef();

  const addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    // props.updateNewPostText(text);
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={styles.posts}>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <button type="button" onClick={addPost}>
        Create a post
      </button>
      <h2 className={styles.my_posts}>My posts</h2>
      {PostsElement}
    </div>
  );
};

export default MyPosts;
