import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../States/state";
import { updateNewPostActionCreator } from "../../../States/state";

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
      {/* <Post message={post.message} id={MyPostsData[0].id} likesCount={MyPostsData[0].likesCount} src="/img/avatar1.jpg" />
<Post message={MyPostsData[1].message} id={MyPostsData[1].id}  likesCount={MyPostsData[1].likesCount} src="/img/avatar2.jpg"/>
<Post message={MyPostsData[2].message} id={MyPostsData[2].id}  likesCount={MyPostsData[2].likesCount} src="/img/avatar3.jpg" /> */}
    </div>
  );
};

export default MyPosts;
