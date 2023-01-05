import React from "react";
import styles from  './ContentInfo.module.css'

const ContentInfo = () => {
    return (
        <div className={styles.content}> 
        <div className={styles.content_wrapper}>
        <img src="/img/content-image.jpg" alt='content' className={styles.content_image}/> 
    
       </div>
       </div>
    
    )
};
export default ContentInfo