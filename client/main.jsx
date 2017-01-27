import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, BodyRoute, hashHistory, IndexRoute, browserHistory} from "react-router";

import 'styles/main.scss';

import Layout from 'components/Layout';
import Index from 'components/Index';
import Projects from 'components/Projects';
import About from 'components/AboutMe';

render(
  <Layout/>, document.getElementById('js-main'));

render(
  <Router history={browserHistory}>
  <Route path="/" component={Index}></Route>
  <Route path="projects" name="projects" component={Projects}></Route>
  <Route path="about" component={About}></Route>
</Router>, 
document.getElementById('first-section'));
