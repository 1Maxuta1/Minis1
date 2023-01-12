import React from "react";
import styles from "../Content/Content.module.css";
import MyPosts from "../Content/Posts/MyPosts";
import ContentInfo from "../Content/ContentInfo/ContentInfo";


const Profile = (props) => {

  return (
    <div className={styles.content}>
      <div className={styles.content_wrapper}>
        <ContentInfo />
        <MyPosts myPostsData={props.myPostsData} />
      </div>
    </div>
  );
};

export default Profile;
