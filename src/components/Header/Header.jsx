import React from "react";
import './Header.module.css';

const Header = () => {
return ( <header className="header">
<div className="logo-block">
<img src="/img/logo.png" alt='Minis logo' className="logo"/>MINIS
</div>
<div className="icons">
<img src="/img/statistics.png" alt="" className="icon"/>
<img src="/img/bell.png" alt="bell" className="icon"/>
<img src="/img/letter.png" alt="letter" className="icon"/>
<input type="text" id="search"></input>
<img src="/img/avatar3.jpg" alt="avatar" className="avatar"></img>
</div>
</header> )
}

export default Header; 