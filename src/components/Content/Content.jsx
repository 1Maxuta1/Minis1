import React from "react";
import styles from "../Content/Content.module.css";
import MyPosts from "../Content/Posts/MyPosts";
import ContentInfo from "../Content/ContentInfo/ContentInfo";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.content_wrapper}>
        <ContentInfo />
        <MyPosts
          state={props.profilePage}
          dispatch={props.dispatch}
          myPostsData={props.profilePage.myPostsData}
          newPostText={props.profilePage.newPostText}
          // addPost={props.addPost}
          // updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};

export default Profile;
