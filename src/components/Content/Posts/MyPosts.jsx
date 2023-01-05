import React from "react";
import styles from'./MyPosts.module.css';
import Post from "./Post/Post";

let MyPostsData = [
    {id:1 , message: "Hi, it's me", likesCount: 2, },
    {id:2 , message: "Nah, you're fake", likesCount: 6},
    {id:3 , message: "Maybe, he is real", likesCount: 4}
]
let PostsElement = 
MyPostsData.map( post => <Post message={post.message} id={post.id} likesCount={post.likesCount} src="/img/avatar1.jpg" />)

const MyPosts = () => {
return (  <div className={styles.posts}>
<div className={styles.content_item}>Avatar + description</div>
<div className={styles.my_posts}>My posts</div>
<button>Create a post</button>
{PostsElement}
{/* <Post message={post.message} id={MyPostsData[0].id} likesCount={MyPostsData[0].likesCount} src="/img/avatar1.jpg" />
<Post message={MyPostsData[1].message} id={MyPostsData[1].id}  likesCount={MyPostsData[1].likesCount} src="/img/avatar2.jpg"/>
<Post message={MyPostsData[2].message} id={MyPostsData[2].id}  likesCount={MyPostsData[2].likesCount} src="/img/avatar3.jpg" /> */}
</div> )
}

export default MyPosts; 