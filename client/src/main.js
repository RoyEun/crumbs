import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import io from 'socket.io-client';

const socket = io('http://localhost:3000');

ReactDOM.render(
  <App socket={socket} />,
  document.getElementById('app')
);

