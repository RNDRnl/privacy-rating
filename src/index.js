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
import Embed from './js/componentsEmbed/Embed'

function LabelView() {
  let { id, domain } = useParams();
  return (<App labelId={id} domain={domain} />);
}

function EmbedView() {
  let { id, domain } = useParams();
  return (<Embed labelId={id} domain={domain}  />);
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
        <Route path="/embed/:id/:domain" children={<EmbedView />} />
        <Route path="/:id/:domain" children={<LabelView />} />
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