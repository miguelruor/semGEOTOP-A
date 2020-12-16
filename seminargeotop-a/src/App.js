import './App.css';

import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import HomePage from './views/HomePage/HomePage';
import NextTalksPage from './views/NextTalksPage/NextTalksPage.js';

var hist = createBrowserHistory();

export default function App(props) {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/algo" component={NextTalksPage} />
      </Switch>
    </Router>
  );
}


