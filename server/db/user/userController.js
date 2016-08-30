const User = require('./userModel.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {
  validateUserLogin: (username, password, socket) => {
    User.findOne({ username }, (err, userData) => {
      let user = '';
      if (userData) {
        user = userData.password === password ? username : '';
      }
      socket.emit('Authentication', user);
    });
  },

  validateUserSignup: (username, password, socket) => {
    User.findOne({ username }, (err, userData) => {
      if (userData) {
        socket.emit('Authentication', '');
      } else {
        User.create({
          username,
          password,
        }).then(() => {
          socket.emit('Authentication', username);
        }).catch((err) => {
          console.log('Failed to create User Data', err);
        });
      }
    });
  },
};
