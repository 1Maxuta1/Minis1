import React from 'react'

const Post = (props) => {
  return (<div className="post">
  <img src={props.src} alt='content' className="avatars"/> 
  Post 1 
  <br></br>
  {props.message}
  </div>

  )
}

export default Post