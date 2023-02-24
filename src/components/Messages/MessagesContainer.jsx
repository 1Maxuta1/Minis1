import { sendMessageCreator } from "../../States/messages-reducer";
import { updateNewMessageBodyCreator } from "../../States/messages-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    MessagesPage: state.MessagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (body) => {
      dispatch(sendMessageCreator(body));
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
