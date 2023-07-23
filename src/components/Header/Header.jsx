import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_block}>
        <img src="/img/logo.png" alt="Minis logo" className={styles.logo} />
        MINIS
      </div>
      <div className={styles.icons}>
        <img src="/img/statistics.png" alt="" className={styles.icon} />
        <img src="/img/bell.png" alt="bell" className={styles.icon} />
        <img src="/img/letter.png" alt="letter" className={styles.icon} />
        <input
          placeholder="Введите запрос"
          type="text"
          id={styles.search}
        ></input>
        <img
          src="/img/avatar3.jpg"
          alt="avatar"
          className={styles.avatar}
        ></img>
      </div>
    </header>
  );
};

export default Header;
