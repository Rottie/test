import React, { Component } from 'react';

import { render } from 'react-dom';

import One from './components/Q1/One';

import Two from './components/Q2/Card';
import Three from './components/Q3/Three';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
class App extends Component { 

 




render() {
 
  return (
  <div className = "App">
    <One/>
    <div class="part">
    <Two/>
    <Three/>
    </div>
  </div>
);
}
}

export default App;
