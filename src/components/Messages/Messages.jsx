import React from "react";
import styles from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

const Messages = (props) => {
  
  let dialogsData = [
    {id:1 , name: 'Max'},
    {id:2 , name: 'Timofey'},
    {id:3 , name: 'Danya'},
    {id:4 , name: 'Maria'},
    {id:5 , name: 'Yehor'},
    {id:6 , name: 'Anya'},
  ]
  
  let messagesData = [
    {id:1 , message: "Привіт, як ти?"},
    {id:2 , message: "Ого, а вона що?"},
    {id:3 , message: "No, i've just come to LA"},
    {id:4 , message: "Та ні, я завтра заберу"},
    {id:5 , message: "Yep, man, gotcha"},
    {id:6 , message: "Думаю, что можна будет в пятницу это отпраздновать"},
  ]

  let dialogsELements = dialogsData
  .map(dialog => <DialogItem message={dialog.message} id={dialog.id} name={dialog.name} />);

 let messagesElements = messagesData
 .map(message => <Message message={message.message} id={message.id}  />);


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
