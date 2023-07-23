import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  // let addUser = React.createRef();

  let addPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let action = updateNewPostActionCreator(text);
    // props.dispatch(action);
  };

  let PostsElement = props.myPostsData.map((post) => (
    <Post
      message={post.message}
      id={post.id}
      likesCount={post.likesCount}
      src="/img/avatar1.jpg"
      key={post.id}
    />
  ));

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
