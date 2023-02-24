import React from "react";
import styles from "../Content/Content.module.css";
import ContentInfo from "../Content/ContentInfo/ContentInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.content_wrapper}>
        <ContentInfo />
        <MyPostsContainer
        // store={props.store}
        // state={props.profilePage}
        // dispatch={props.dispatch}
        // myPostsData={props.profilePage.myPostsData}
        // newPostText={props.profilePage.newPostText}
        // addPost={props.addPost}
        // updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};

export default Profile;
