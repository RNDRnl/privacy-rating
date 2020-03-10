import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from './main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from './js/components/App'
import Form from './js/components/Form'
import NotFound from './js/components/NotFound'

const routes = (
   <Router>
     <Switch>
        <Route path="/form">
          <Form />
        </Route>
       <Route exact path="/">
          <App />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
     </Switch>
   </Router>
)

ReactDOM.render(
  routes,
  document.getElementById("container")
);