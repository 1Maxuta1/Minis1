import React from "react";
import styles from "../Content/Content.module.css";
import MyPosts from "../Content/Posts/MyPosts";
import ContentInfo from "../Content/ContentInfo/ContentInfo";

const Profile = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_wrapper}>
        <ContentInfo />
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
