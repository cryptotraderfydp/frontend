import React, { Component } from 'react';
import logo from '../logo.png';

export default class Home extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <h1>
          Home
        </h1>
        <img src={logo} alt="Logo" />
      </div>
    );
  }
}