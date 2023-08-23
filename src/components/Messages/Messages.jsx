import React from "react";
import styles from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Messages = (props) => {
  let state = props.MessagesPage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem
      src={dialog.src}
      message={dialog.message}
      id={dialog.id}
      name={dialog.name}
      nickname={dialog.nickname}
      key={dialog.id}
    />
  ));

  let messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  let newMessageBody = state.newMessageBody;

  const sendMessage = () => {
    if (newMessageBody.trim() !== "") {
      props.sendMessage();
    }
  };

  let onNewMessageBody = (event) => {
    // props.updateNewPostText(text);
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Your dialogs</div>
      <div className={styles.section}>
        <div className={styles.dialogs}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
      <div>
        <textarea
          placeholder="Enter your message"
          value={newMessageBody}
          onChange={onNewMessageBody}
        ></textarea>
      </div>
      <button className={styles.button} type="button" onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default Messages;
