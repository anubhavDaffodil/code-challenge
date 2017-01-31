import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app';

export default class sportdec extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('sportdec', () => sportdec);