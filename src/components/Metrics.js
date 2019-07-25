import React, { Component } from 'react';
import image2year from '../assets/2year-LSTM.png';

export default class Metrics extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <h1>
          Perfomance metrics:
        </h1>
        <img src={image2year} alt='2year' style={{width: '1200px'}}/>
      </div>
    );
  }
}