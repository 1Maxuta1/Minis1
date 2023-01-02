import React from "react";
import styles from '../Music/Music.module.css'

const Music = () => {
    return (
        <div className={styles.wrapper}>
       <div className={styles.title}>Communities</div>
       <div className={styles.main_content}>  
        <div className={styles.section}>
        <img src="./img/hiphopcover.jpg" alt="content"></img>
        <p>Hip-Hop</p>
        </div>
        <div className={styles.section}>
        <img src="./img/instrumentalcover.jpg" alt="content"></img>
        <p>Instrumentals</p>
        </div>
        <div className={styles.section}>
        <img src="./img/metalcover.jpg" alt="content"></img>
        <p>Metal</p>
        </div>
        <div className={styles.section}>
        <img src="./img/rockcover.jpg" alt="content"></img>
        <p>Rock</p>
        </div>
        <div className={styles.section}>
        <img src="./img/countrycover.jpeg" alt="content"></img>
        <p>Country</p>
        </div>
        <div className={styles.section}>
        <img src="./img/jazzcover.jpg" alt="content"></img>
        <p>Jazz</p>
        </div>
        <div className={styles.section}>
        <img src="./img/indiecover.jpg" alt="content"></img>
        <p>Indie</p>
        </div>
        <div className={styles.section}>
        <img src="./img/electroniccover.jpg" alt="content"></img>
        <p>Electronic</p>
        </div>
        <div className={styles.section}>
        <img src="./img/hyperpopcover.webp" alt="content"></img>
        <p>Hyperpop</p>
        </div>
        <div className={styles.section}>
        <img src="./img/popcover.jpg" alt="content"></img>
        <p>Pop</p>
        </div>
        <div className={styles.section}>
        <img src="./img/rapcover.jpg" alt="content"></img>
        <p>Rap</p>
        </div>
        <div className={styles.section}>
        <img src="./img/urbancover.jpg" alt="content"></img>
        <p>Urban</p>
        </div>
        </div>
       </div>
       
    )
};

export default Music