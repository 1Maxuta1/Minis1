import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';

const Nav = () => {
return (
<nav className={styles.nav}>
<div className={styles.item}> 
<NavLink to="/profile" activeclassName={styles.nav_title + '' + styles.active}>Profile</NavLink>
</div>
<div className={styles.item}> 
<NavLink to="/messages" activeclassName={styles.nav_title + '' + styles.active}>Messages</NavLink>
</div>
<div className={styles.item}> 
<NavLink to="/news" activeclassName={styles.nav_title + '' + styles.active}>News</NavLink>
</div>
<div className={styles.item}> 
<NavLink to="/music" activeclassName={styles.nav_title + '' + styles.active}>Music</NavLink>
</div>
<div className={styles.item}> 
<NavLink to="/settings" activeclassName={styles.nav_title + '' + styles.active}>Settings</NavLink>
</div>
<div className={styles.item}>                                                                                                                       
<NavLink to="/Friends" activeclassName={styles.nav_title + '' + styles.active}>Friends</NavLink>
</div>
<img src="/img/avatar1.jpg" alt="friend" className={styles.avatars}></img>
<img src="/img/avatar2.jpg" alt="friend" className={styles.avatars}></img>
<img src="/img/avatar3.jpg" alt="friend" className={styles.avatars}></img>
<img src="/img/avatar3.jpg" alt="friend" className={styles.avatars}></img>
<img src="/img/avatar1.jpg" alt="friend" className={styles.avatars}></img>
<img src="/img/avatar1.jpg" alt="friend" className={styles.avatars}></img>
</nav> )
}

export default Nav