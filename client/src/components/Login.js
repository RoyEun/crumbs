import React from 'react';
import { Button } from 'react-bootstrap';

const Login = ({
  signUp,
  validateUserLogin,
}) => (
  <div>
    <form>
      <Button
        onClick={signUp}
        bsStyle="link"
      >
        Don't have an account?
      </Button>
      <Button
        onClick={validateUserLogin}
        bsStyle="primary"
      >
        Log In
      </Button>
    </form>
  </div>
);

Login.propTypes = {
  signUp: React.PropTypes.func,
  validateUserLogin: React.PropTypes.func,
};

export default Login;
