import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img src={props.src} alt="content" className={styles.avatars} />
      Post {props.id}
      <br></br>
      {props.message}
      <br></br>
      {props.likesCount} likes
    </div>
  );
};

export default Post;
