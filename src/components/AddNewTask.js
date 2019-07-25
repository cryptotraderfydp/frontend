import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import update from 'immutability-helper';

const formStyle = {
  width: '50%'
};

export default class AddNewTask extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor(props) {
    super(props);
    this.state = {
      risk: 'low',
      start: '00:00',
      end: '00:00',
      maxreturn: '100%',
      data: {}
    };

    this.handleRiskChange = this.handleRiskChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleMaxreturnChange = this.handleMaxreturnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRiskChange(event) {
    this.setState({ risk: event.target.value });
  }

  handleStartChange(event) {
    this.setState({ start: event.target.value });
  }

  handleEndChange(event) {
    this.setState({ end: event.target.value });
  }

  handleMaxreturnChange(event) {
    this.setState({ maxreturn: event.target.value });
  }

  handleSubmit(event) {
    alert('The risk level you selected is: ' + this.state.risk);

    var url = '';
    var data = JSON.parse(JSON.stringify(this.state));

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Select your risk level:
          <select value={this.state.risk} onChange={this.handleRiskChange}>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </label>
          <br />
          <label>
            Put your start time:
            <input type="text" value={this.state.start} onChange={this.handleStartChange} />
          </label>
          <br />
          <label>
            Put your end time:
            <input type="text" value={this.state.end} onChange={this.handleEndChange} />
          </label>
          <br />
          <label>
            Stop at return:
            <input type="text" value={this.state.maxreturn} onChange={this.handleMaxreturnChange} />
          </label>
          <input type="submit" value="Submit" />
        </form> */}

        <Form onSubmit={this.handleSubmit} style={formStyle}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select your risk level:</Form.Label>
            <Form.Control as="select">
              <option>low</option>
              <option>midium</option>
              <option>high</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formPlaintext">
            <Form.Label>Put your start time:</Form.Label>
            <Form.Control type="plaintext" placeholder="0:00" value={this.state.start} onChange={this.handleStartChange} />
          </Form.Group>
          <Form.Group controlId="formPlaintext">
            <Form.Label>Put your end time:</Form.Label>
            <Form.Control type="plaintext" placeholder="0:00" value={this.state.end} onChange={this.handleEndChange} />
          </Form.Group>
          <Form.Group controlId="formPlaintext">
            <Form.Label>Stop at return:</Form.Label>
            <Form.Control type="plaintext" placeholder="100%" value={this.state.maxreturn} onChange={this.handleMaxreturnChange} />
          </Form.Group>
        </Form>

      </div>
    );
  }
}