import React, { Component } from "react";
import ReactDOM from "react-dom";

import styles from './main.scss';
import cssBootstrap from './css/bootstrap.min.css';
import cssImagegellery from './css/imagegellery.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { FormProvider } from './state/FormContext'
import { LabelProvider } from './state/LabelContext';

import App from './js/componentsLabel/App'
import Home from './js/componentsHome/Home'
import About from './js/componentsAbout/About'
import Form from './js/componentsForm/Form'
import NotFound from './js/NotFound'
import Embed from './js/componentsEmbed/Embed'
import Contact from './js/componentsContact/Contact'
import PrivacyPolicy from './js/componentsPrivacyPolicy/PrivacyPolicy'
import TermsOfUse from './js/componentsTermsOfUse/TermsOfUse'

function validateId(id) {
  var boolean = true;
  if(id.length != 12) {
    boolean = false;
  }
  var charCharValid = true;
  id.split("").forEach(function(element) {
    if(element != "P" && element != "R" && element != "L") {
      charCharValid = false;
    }
  });
  if(!charCharValid) {
    boolean = false
  }
  return boolean;
}

function LabelView() {
  let { id, domain } = useParams();
  if(validateId(id)) {
    return (<App labelId={id} domain={domain} />);
  } else {
    return (<NotFound />);
  }
}

function EmbedView() {
  let { id, domain } = useParams();
  if(validateId(id)) {
    return (<Embed labelId={id} domain={domain}  />);
  } else {
    return (<NotFound />);
  }
}
const routes = (
   <Router basename={"/"}>
     <Switch>
        <Route path="/form">
          <FormProvider>
            <Form />
          </FormProvider>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" children={
          <About />
        } />
        <Route path="/contact" children={
          <Contact />
        } />
        <Route path="/privacy-policy" children={
          <PrivacyPolicy />
        } />
        <Route path="/embed/:id/:domain" children={
            <LabelProvider>
              <EmbedView />
            </LabelProvider>
        } />
        <Route path="/embed/:id" children={
            <LabelProvider>
              <EmbedView />
            </LabelProvider>
        } />
        <Route path="/:id/:domain" children={<LabelView />} />
        <Route path="/:id" children={<LabelView />} />
        <Route path="*">
          <NotFound />
        </Route>
     </Switch>
   </Router>
)

const selector = document.querySelectorAll('.privacy-rating')

switch (selector.length) {
  case 1:
    // /////////
    // WIDGET MODE
    // /////////
    const widgetDiv = selector[0];
    ReactDOM.render(
      <App labelId={widgetDiv.dataset.id} domain={widgetDiv.dataset.domain} />,
      widgetDiv
    );        
    break
  default:
    // /////////
    // FRONTAGE MODE
    // /////////      
    ReactDOM.render(
      routes,
      document.getElementById("container")
    );
}

