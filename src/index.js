import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from './main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { FormProvider } from './state/FormContext'

import App from './js/componentsLabel/App'
import Home from './js/componentsHome/Home'
import Form from './js/componentsForm/Form'
import NotFound from './js/NotFound'

function LabelView() {
  let { id } = useParams();

  return (
    <App formId={id} />
  );
}

const routes = (
   <Router>
     <Switch>
        <Route path="/form">
          <FormProvider>
            <Form />
          </FormProvider>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id" children={<LabelView />} />
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