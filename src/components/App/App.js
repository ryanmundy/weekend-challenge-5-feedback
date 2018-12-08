import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import StepOne from '../StepOne/StepOne';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
          <Route path="/" exact component={StepOne} />
        <br/>
          
      </div>
      </Router>
    );
  }
}

// const mapStateToProps = (reduxStore) => {
//   return {
//     reduxStore
//   }
// }

export default App;
