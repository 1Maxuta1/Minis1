import React from "react";
import styles from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageCreator } from "../../States/state";
import { updateNewMessageBodyCreator } from "../../States/state";

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Messages = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem
      message={dialog.message}
      id={dialog.id}
      name={dialog.name}
      nickname={dialog.nickname}
    />
  ));

  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessageBody = props.state.newMessageBody;

  const sendMessage = () => {
    // props.addPost();
    props.dispatch(sendMessageCreator());
  };

  let updateNewMessageBody = (event) => {
    // props.updateNewPostText(text);
    let body = event.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
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
          onChange={updateNewMessageBody}
        ></textarea>
      </div>
      <button className={styles.button} type="button" onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default Messages;
