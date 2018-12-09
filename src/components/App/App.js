import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import StepFour from '../StepFour/StepFour';
import Success from '../Success/Success';
import 'typeface-roboto';

class App extends Component {

  render() {
    return (
      //sets up router and routes
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <div className="routes">
            <Route path="/" exact component={StepOne} />
            <Route path="/2" exact component={StepTwo} />
            <Route path="/3" exact component={StepThree} />
            <Route path="/4" exact component={StepFour} />
            <Route path="/5" exact component={Success} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
