import React from 'react';
import { Button } from 'react-bootstrap';

const SignUp = ({
  logIn,
  validateUserSignup,
}) => (
  <div>
    <form>
      <Button
        onClick={logIn}
        bsStyle="link"
      >
        Already have an account?
      </Button>
      <Button
        onClick={validateUserSignup}
        bsStyle="primary"
      >
        Sign Up
      </Button>
    </form>
  </div>
);

SignUp.propTypes = {
  logIn: React.PropTypes.func,
  validateUserSignup: React.PropTypes.func,
};

export default SignUp;
