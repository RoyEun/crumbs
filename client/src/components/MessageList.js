import React from 'react';
import { Panel, ListGroup } from 'react-bootstrap';
import MessageListEntry from './MessageListEntry';

const MessageList = ({ messages }) => (
  <Panel style={{ fontWeight: 'bold' }} header="Chatroom messages">
    <ListGroup fill>
      {messages.map((message, i) => <MessageListEntry key={i} message={message} />)}
    </ListGroup>
  </Panel>
);

MessageList.propTypes = {
  messages: React.PropTypes.array,
};

export default MessageList;
