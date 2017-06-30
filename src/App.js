import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Link, Switch}
  from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InputForm from './inputform';

import getMuiTheme from 'material-ui/styles/getMuiTheme';



class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <InputForm/>
        </MuiThemeProvider>
    );
  }
}

export default App;
