import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home/components/Home.component'
import SignIn from './auth/containers/SignIn.container'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}

export default App;
