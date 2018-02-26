import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home/components/Home.component';
import Auth from './auth/containers/Auth.container.jsx';
import Header from './comman/containers/Header.container';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Header />
          </header>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={Auth} />
            <Route path="/signout" component={Auth} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
