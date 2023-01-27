import React from "react";
import styles from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Messages = (props) => {
  let dialogsELements = props.state.dialogsData.map((dialog) => (
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

  let newTextElement = React.createRef();
  let addMessage = () => {
    let text = newTextElement.current.value;
    alert(text);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Your dialogs</div>
      <div className={styles.section}>
      <div className={styles.dialogs}>{dialogsELements}</div>

      <div className={styles.messages}>{messagesElements}</div>
      </div>
      <button onClick={addMessage}>Send</button>
      <div>
        <textarea ref={newTextElement}></textarea>
      </div>
    </div>
  );
};

export default Messages;
