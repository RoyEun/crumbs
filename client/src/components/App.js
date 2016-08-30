import React from 'react';
import Authentication from './Authentication';
import Authenticated from './Authenticated';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: null,
      location: '37.7837-122.4090',
      userLoggedIn: '',
    };
  }

  componentWillMount() {
    const { socket } = this.props;

    setInterval(this.updateLocationState.bind(this), 500);

    socket.on('updateMessagesState', (location) => {
      const messages = location ? location.messages : null;
      this.setState({
        messages,
      });
    });

    socket.on('Authentication', (user) => {
      this.setState({
        userLoggedIn: user,
      });
    });
  }

  setPosition(position) {
    const latRound = position.coords.latitude.toFixed(3);
    const lonRound = position.coords.longitude.toFixed(3);
    const location = latRound.toString() + lonRound.toString();
    if (location !== this.state.location) {
      this.setState({
        location,
      });
      this.updateMessagesState();
    }
  }

  updateLocationState() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.error);
    } else {
      console.log('geolocation not supported');
    }
  }

  updateMessagesState() {
    this.props.socket.emit('updateMessagesState', this.state.location);
  }

  createChatRoom() {
    this.props.socket.emit('createChatRoom', this.state.location);
  }

  addMessageToChatRoom(message) {
    this.props.socket.emit('addMessageToChatRoom', {
      location: this.state.location,
      message,
      username: this.state.userLoggedIn,
    });
  }

  logOutUser() {
    this.setState({
      userLoggedIn: '',
    });
  }

  render() {
    const { messages, userLoggedIn } = this.state;
    const { socket } = this.props;

    const loggedIn = (
      <Authenticated
        messages={messages}
        userLoggedIn={userLoggedIn}
        addMessageToChatRoom={(message) => { this.addMessageToChatRoom(message); }}
        createChatRoom={() => { this.createChatRoom(); }}
        logOutUser={() => { this.logOutUser(); }}
      />
    );

    const notLoggedIn = (
      <Authentication
        socket={socket}
      />
    );

    let childToRender = !!this.state.userLoggedIn ? loggedIn : notLoggedIn;

    return (
      <div>
        {childToRender}
      </div>
    );
  }
}

App.propTypes = {
  socket: React.PropTypes.object,
};

export default App;
