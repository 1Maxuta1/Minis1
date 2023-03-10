import React from "react";
import styles from "./../Messages.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={styles.dialog + "" + styles.active}>
      <NavLink to={path}>
        <img src="/img/avatar1.jpg" alt="avatar" className={styles.avatars} />
        {props.name}
        {props.nickname}
        {/* <img
      src="/img/dialogs-section-icon.png" className={styles.info_icon} alt="icons">
        </img> */}
      </NavLink>
    </div>
  );
};

export default DialogItem;
