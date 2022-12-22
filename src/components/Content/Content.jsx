import React from "react";
import '../Content/Content.css'
import MyPosts from "../Content/Posts/MyPosts"

const Profile = () => {
    return (
        <div className="content"> 
        <div className="content-wrapper">
        <img src="/img/content-image.jpg" alt='content' className="content-image"/> 
       <MyPosts />
       </div>
       </div>
    
    )
};

export default Profile