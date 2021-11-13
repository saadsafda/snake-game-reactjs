import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Home';

ReactDOM.render(
  <Router>
  <Switch>
  <Route path="/game">
    <App />
  </Route>
  <Route path="/">
    <Home />
  </Route>
  </Switch>
  </Router>, document.getElementById('root'));
