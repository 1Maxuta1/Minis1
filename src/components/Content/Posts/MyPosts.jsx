import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = () => {
return (  <div className="posts">
<div className="content-item">Avatar + description</div>
<div className="my-posts">My posts</div>
<Post message="Hi, it's me" src="/img/avatar1.jpg" />
<Post message="Nah, you're fake" src="/img/avatar2.jpg"/>
<Post message="Maybe, he is real" src="/img/avatar3.jpg" />
</div> )
}

export default MyPosts; 