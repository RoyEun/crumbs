import React from 'react';
import { AddMessage } from './AddMessage';
import { MessageList } from './MessageList';

export const ChatRoom = ({ addMessageToChatRoom, messages}) => (
  <div>
    <AddMessage addMessageToChatRoom={addMessageToChatRoom} />
    <MessageList messages={messages} />
  </div>
);
