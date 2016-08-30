import React from 'react';

export const UserEntry = ({
  userChange,
  usernameText,
  passwordChange,
  passwordText,
}) => (
  <div>
    <form>
      <input
        onChange={userChange}
        value={usernameText}
        type="text"
        placeholder="username"
      />
      <input
        onChange={passwordChange}
        value={passwordText}
        type="password"
        placeholder="password"
      />
    </form>
  </div>
);

UserEntry.propTypes = {
  userChange: React.PropTypes.func,
  usernameText: React.PropTypes.string,
  passwordChange: React.PropTypes.func,
  passwordText: React.PropTypes.string,
};

export default UserEntry;
