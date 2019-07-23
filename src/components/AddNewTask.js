import React, { Component } from 'react';

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
      maxreturn: '100%'
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
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </div>
    );
  }
}