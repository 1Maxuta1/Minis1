const NEW_MESSAGE_BODY = "NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Max", nickname: "@_maxuta_" },
    { id: 2, name: "Timofey", nickname: "@tifomey.png" },
    { id: 3, name: "Danya", nickname: "@irritatingnator" },
    { id: 4, name: "Maria", nickname: "@kostamarina" },
    { id: 5, name: "Yehor", nickname: "@teengor" },
    { id: 6, name: "Anya", nickname: "@anya" },
  ],
  messagesData: [
    { id: 1, message: "Привіт, як ти?" },
    { id: 2, message: "Ого, а вона що?" },
    { id: 3, message: "No, i've just come to LA" },
    { id: 4, message: "Та ні, я завтра заберу" },
    { id: 5, message: "Yep, man, gotcha" },
    {
      id: 6,
      message: "Думаю, что можна будет в пятницу это отпраздновать",
    },
  ],
  newMessageBody: "",
};
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      break;
    default:
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({
        id: state.messagesData.length + 1,
        message: body,
      });
      break;
  }
  return state;
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: NEW_MESSAGE_BODY,
  body: body,
});

export default messagesReducer;
