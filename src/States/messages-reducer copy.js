const NEW_MESSAGE_BODY = "NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const messagesReducer = (state, action) => {
  if (action.type === NEW_MESSAGE_BODY) {
    _state.MessagesPage.newMessageBody = action.body;
    this._callSubscriber(this._state);
  } else if (action.type === SEND_MESSAGE) {
    let body = this._state.MessagesPage.newMessageBody;
    this._state.MessagesPage.messagesData.push({
      id: this._state.MessagesPage.messagesData.length + 1,
      message: body,
    });
    this._state.MessagesPage.newMessageBody = "";
    this._callSubscriber(this._state);
  }
  return state;
};
