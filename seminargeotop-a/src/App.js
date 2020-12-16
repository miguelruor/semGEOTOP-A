import './App.css';

import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import HomePage from './views/HomePage/HomePage';
import NextTalksPage from './views/NextTalksPage/NextTalksPage';

var hist = createBrowserHistory();

export default function App(props) {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/next" component={NextTalksPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}


