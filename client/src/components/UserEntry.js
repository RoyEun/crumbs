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
