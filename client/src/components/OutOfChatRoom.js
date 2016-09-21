import React from 'react';
import { Button } from 'react-bootstrap';

const style = {
  margin: 'auto auto',
  height: '100%',
};

const OutOfChatRoom = ({ createChatRoom }) => (
  <div style={style}>
    <h2>you are not in a Chatroom!</h2>
    <br />
    <p>create a chatroom at this spot to start a thread. Leave a message for someone else to find later!</p>
    <br />
    <Button
      bsStyle="primary"
      onClick={createChatRoom}
    >
      Create a new Chatroom!
    </Button>
    <br />
    <br />
  </div>
);

OutOfChatRoom.propTypes = {
  createChatRoom: React.PropTypes.func,
};

export default OutOfChatRoom;
