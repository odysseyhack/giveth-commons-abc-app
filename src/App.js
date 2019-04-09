import React, { Component } from 'react';
import {EcosystemWrapper, TextInput} from '@commons/ecosystem';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
    <EcosystemWrapper>
      <TextInput label="Email Address" placeholder="name@example.com" />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </EcosystemWrapper>
    );
  }
}

export default App;
