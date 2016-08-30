import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleInputChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit() {
    this.props.addMessageToChatRoom(this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Add a message to the chatroom</ControlLabel>
          <FormControl
            type="text"
            value={this.state.message}
            placeholder="Enter text"
            onChange={(e) => { this.handleInputChange(e); }}
          />
          <br />
          <Button
            bsStyle="primary"
            onClick={() => { this.handleSubmit(); }}
          >
            Add message
          </Button>
        </FormGroup>
      </form>
    );
  }
}

AddMessage.propTypes = {
  addMessageToChatRoom: React.PropTypes.func,
};

export default AddMessage;
