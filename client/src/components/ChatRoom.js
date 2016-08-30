import React from 'react';
import AddMessage from './AddMessage';
import MessageList from './MessageList';

const ChatRoom = ({
  addMessageToChatRoom,
  messages,
}) => (
  <div>
    <AddMessage addMessageToChatRoom={addMessageToChatRoom} />
    <MessageList messages={messages} />
  </div>
);

ChatRoom.propTypes = {
  addMessageToChatRoom: React.PropTypes.func,
  messages: React.PropTypes.array,
};

export default ChatRoom;
