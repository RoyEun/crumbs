import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import ChatRoom from './ChatRoom.js';
import OutOfChatRoom from './OutOfChatRoom.js';

const Authenticated = ({
  messages,
  userLoggedIn,
  addMessageToChatRoom,
  createChatRoom,
  logOutUser,
}) => {
  const appStyle = {
    margin: 'auto auto',
    width: '80%',
    height: '100%',
    border: '1px solid black',
    padding: '7%',
    textAlign: 'center',
    background: '#CCC',
  };

  const chatRoom = (
    <ChatRoom
      messages={messages}
      user={userLoggedIn}
      addMessageToChatRoom={addMessageToChatRoom}
    />
  );

  const outOfChatRoom = (
    <OutOfChatRoom
      createChatRoom={createChatRoom}
    />
  );

  const childToRender = !!messages ? chatRoom : outOfChatRoom;

  return (
    <div style={appStyle}>
      <Button
        style={{ float: 'right' }}
        bsStyle="link"
        onClick={logOutUser}
      >
        Logout
      </Button>
      <div>
        <Jumbotron>
          <h1>Crumbs</h1>
          <p>your local chatroom</p>
        </Jumbotron>
        {childToRender}
      </div>
    </div>
  );
};

Authenticated.propTypes = {
  messages: React.PropTypes.array,
  userLoggedIn: React.PropTypes.sting,
  addMessageToChatRoom: React.PropTypes.func,
  createChatRoom: React.PropTypes.func,
  logOutUser: React.PropTypes.func,
};

export default Authenticated;
