import React from "react";
import styles from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

const Messages = (props) => { 

  let dialogsELements = props.dialogsData.map(dialog => <DialogItem message={dialog.message} id={dialog.id} name={dialog.name} />);

 let messagesElements = props.messagesData.map(message => <Message message={message.message} id={message.id}  />);


  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Your dialogs</div>
      <div className={styles.dialogs}>
        <div className={styles.dialog_items}>
         {dialogsELements}
        <div className={styles.messages}>
         {messagesElements}
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Messages;
