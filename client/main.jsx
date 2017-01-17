import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import 'styles/main.scss';
import 'styles/gallery.scss';

import Parallax from 'components/Index/ParallaxEffect';
import TopNavBar from 'components/Navbars/MainTop';
import ImageAlbum from 'components/ImageAlbum';
import ImageGallery from 'components/ImageGallery';

const projectImageObjects = [
  {
    url: "https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569708963b0be3" +
        "f9ce875be0/1452738819808/Render+07.png?format=750w",
    name: "REGILO"
  }, {
    url: "https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569707b00e4c11" +
        "9a540baff5/1452738538984/Usability+Final.png?format=750w",
    name: "SAMXA'E"
  }, {
    url: "https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569706e4df40f3" +
        "06cad901e1/1452738288707/_MG_1197.jpg?format=750w",
    name: "HELLBOY PACKAGE DESIGN"
  }, {
    url: "https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569706384bf118" +
        "ce98c78a8c/1452738156214/Cutaway.127.png?format=750w",
    name: "THE RO"
  }, {
    url: "https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/5760ee02e707eb" +
        "1822a13d8b/1465970186124/20150519_203927.jpg?format=500w",
    name: "STEAMER REDESIGN"
  }, {
    url: "https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/5760e9d627d4bd" +
        "cb665722d8/1465969229638/Camp+Stove+Redesign+04+Paint.png?format=750w",
    name: "GRILL TEK"
  }
];

document.addEventListener('DOMContentLoaded', function (event) { //Run once the page is actually up
  render(
    <IndexComponent/>, document.getElementById('js-main'));
  render(
    <Parallax/>, document.getElementById('parallax-header'));
  render(
    <TopNavBar/>, document.getElementById('top-nav-bar'));

  render(
    <Router history={hashHistory}>
    <Route path="/" component={DefaultComponent}></Route>
    <Route
      path="/projects"
      imageObjects={projectImageObjects}
component={ImageAlbum}></Route>
  </Router>, document.getElementById('first-section'));

  // render(<ImageGallery imagesInGallery ={[ "http://i.imgur.com/qlK09NA.png",
  //    "http://i.imgur.com/MAm4goL.jpg",   "http://i.imgur.com/acSuncc.png",
  //  "http://i.imgur.com/iOgoxEb.png",     "http://i.imgur.com/QZTdtds.jpg",
  //  "http://i.imgur.com/AcR9ert.png"  ]}/>,
  // document.getElementById('first-section'));
}, false);

class DefaultComponent extends Component {

  render() {
    return (
      <div></div>
    );
  }
}
class IndexComponent extends Component {

  render() {
    return (
      <div>
        <div id="content">
          <div className="container">
            <section id="first-section"></section>
          </div>
        </div>
      </div>
    );
  }
}
