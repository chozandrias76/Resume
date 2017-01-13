'use strict';

import 'styles/main.scss';
import 'styles/gallery.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Index from 'components/Index/Index';
import TopNavBar from 'components/Navbars/MainTop';
import Parallax from 'components/Index/ParallaxEffect';

render(
    <Parallax/>, document.getElementById('parallax-header'));
render(
    <TopNavBar/>, document.getElementById('top-nav-bar'));
render(
    <Router history={hashHistory}>
    <Route path ="/" component={Index}>
    </Route>
    </Router>, document.getElementById('js-main'));