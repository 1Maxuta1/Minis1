import React from "react";
import './Nav.css';

// let classes = {
//     'nav':
// }
const Nav = () => {
return (
<nav className="nav">
<a href="/profile" className="nav-title">Profile</a>
<a href="/messages" className="nav-title">Messages</a>
<a href="/" className="nav-title">News</a>
<a href="/" className="nav-title">Music</a>
<a href="/" className="nav-title">Settings</a>
</nav> )
}

export default Nav