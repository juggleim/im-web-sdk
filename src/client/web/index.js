import Conversation from "./conversation";
import Message from "./message";
import Socket from "./socket";
import Chatroom from "./chatroom";
let init = ({ io, emitter, logger }) => {
  let socket = Socket(io, emitter, logger);
  let conversation = Conversation(io, emitter, logger);
  let message = Message(io, emitter, logger);
  let chatroom = Chatroom(io, emitter, logger);

  io.setConfig({
    logger: logger,
    $message: {
      insertBatchMsgs: (params) => {
        return Promise.resolve()
      }
    },
  });


  return {
    socket,
    conversation,
    message,
    chatroom,
  };
};
export default {
  init
}