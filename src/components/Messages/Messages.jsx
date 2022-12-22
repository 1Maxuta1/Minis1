import React from "react";
import "./Messages.module.css";

const Messages = (props) => {
  return ( 
  <div className="wrapper">
        <div className="messages-title">Your dialogs</div>
        <div className="dialog-items">
        <div className="dialog">
              <img src="/img/avatar1.jpg" alt="avatar" className="avatars" />
               Max
               @_maxuta_
               <img
              src="/img/dialogs-section-icon.png" className="info-icon" alt="icons">
                </img>
            </div> 
            <div className="dialog">
              <img src="/img/avatar-tima.jpeg" alt="avatar" className="avatars" />
               Timofey
               @tifomey.png
               <img
              src="/img/dialogs-section-icon.png" className="info-icon" alt="icons">
                </img>
            </div> 
            <div className="dialog">
              <img src="/img/avatar-danya.jpeg" alt="avatar" className="avatars" />
               Danya
               @irritatingnator
               <img
              src="/img/dialogs-section-icon.png" className="info-icon" alt="icons">
                </img>
            </div> 
            </div>
            
           
  </div>
  );
};

export default Messages;
