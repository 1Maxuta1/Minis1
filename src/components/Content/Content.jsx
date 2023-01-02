import React from "react";
import styles from  '../Content/Content.module.css'
import MyPosts from "../Content/Posts/MyPosts"

const Profile = () => {
    return (
        <div className={styles.content}> 
        <div className={styles.content_wrapper}>
        <img src="/img/content-image.jpg" alt='content' className={styles.content_image}/> 
       <MyPosts />
       </div>
       </div>
    
    )
};

export default Profile