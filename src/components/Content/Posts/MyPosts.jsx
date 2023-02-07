import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

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

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.posts}>
      <div className={styles.content_item}>Avatar + description</div>
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
      <div className={styles.my_posts}>My posts</div>
      {PostsElement}
      {/* <Post message={post.message} id={MyPostsData[0].id} likesCount={MyPostsData[0].likesCount} src="/img/avatar1.jpg" />
<Post message={MyPostsData[1].message} id={MyPostsData[1].id}  likesCount={MyPostsData[1].likesCount} src="/img/avatar2.jpg"/>
<Post message={MyPostsData[2].message} id={MyPostsData[2].id}  likesCount={MyPostsData[2].likesCount} src="/img/avatar3.jpg" /> */}
    </div>
  );
};

export default MyPosts;
