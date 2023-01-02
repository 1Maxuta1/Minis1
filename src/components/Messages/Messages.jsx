import React from "react";
import { NavLink } from "react-router-dom";
import styles from"./Messages.module.css";

const Messages = (props) => {
  return ( 
  <div className={styles.wrapper}>
        <div className={styles.title}>Your dialogs</div>
        <div className={styles.dialogs}>
        <div className={styles.dialog_items}>
        <div className={styles.dialog + '' + styles.active}>
        <NavLink to='/messages/1'>
          <img src="/img/avatar1.jpg" alt="avatar" className={styles.avatars} />
              Max
               @_maxuta_
               {/* <img
              src="/img/dialogs-section-icon.png" className={styles.info_icon} alt="icons">
                </img> */}
                </NavLink> 
            </div> 
            <div className={styles.dialog}>
            <NavLink to='/messages/2'>
              <img src="/img/avatar-tima.jpeg" alt="avatar" className={styles.avatars} />
               Timofey
               @tifomey.png
               {/* <img
              src="/img/dialogs-section-icon.png" className={styles.info_icon} alt="icons">
                </img> */}
                </NavLink> 
            </div> 
            <div className={styles.dialog}>
            <NavLink to='/messages/3'>
              <img src="/img/avatar-danya.jpeg" alt="avatar" className={styles.avatars} />
               Danya
               @irritatingnator
               {/* <img
              src="/img/dialogs-section-icon.png" className={styles.info_icon} alt="icons">
                </img> */}
                </NavLink> 
            </div> 
            <div className={styles.dialog}>
            <NavLink to='/messages/4'>
              <img src="/img/avatar-danya.jpeg" alt="avatar" className={styles.avatars} />
               Danya
               @irritatingnator
               {/* <img
              src="/img/dialogs-section-icon.png" className={styles.info_icon} alt="icons">
                </img> */}
                </NavLink> 
            </div> 
            <div className={styles.dialog}>
            <NavLink to='/messages/5'>
              <img src="/img/avatar-danya.jpeg" alt="avatar" className={styles.avatars} />
               Danya
               @irritatingnator
               {/* <img
              src="/img/dialogs-section-icon.png" className={styles.info_icon} alt="icons">
                </img> */}
                </NavLink> 
            </div> 
            <div className={styles.dialog}>
            <NavLink to='/messages/6'>
              <img src="/img/avatar-danya.jpeg" alt="avatar" className={styles.avatars} />
               Danya
               @irritatingnator
               {/* <img
              src="/img/dialogs-section-icon.png" className={styles.info_icon} alt="icons">
                </img> */}
                </NavLink> 
            </div> 
            </div>
            <div className={styles.messages}>
            <div className={styles.message}>Привіт, як ти?</div>
            <div className={styles.message}>Ого, а вона що?</div>
            <div className={styles.message}>Та ні, я завтра заберу</div>
            <div className={styles.message}>No, i've just come to LA</div>
            <div className={styles.message}>Yep, man, gotcha</div>
            <div className={styles.message}>Думаю, что можна будет в пятницу это отпраздновать</div>
            </div>
            
            </div>
  </div>
  );
};

export default Messages;
