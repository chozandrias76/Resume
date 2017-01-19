import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import 'styles/main.scss';
import 'styles/gallery.scss';

import Parallax from 'components/Headers/ParallaxEffect';
import TopNavBar from 'components/Navbars/MainTop';
import ImageAlbum from 'components/ImageAlbum';
import ImageGallery from 'components/ImageGallery';
import MainFooter from 'components/Footers/MainBottom';

const projectImageObjects = [
  {
    url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/Render+07.png",
    name: "REGILO"
  }, {
    url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/Usability+Final.png",
    name: "SAMXA'E"
  }, {
    url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/_MG_1197.jpg",
    name: "HELLBOY PACKAGE DESIGN"
  }, {
    url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/Cutaway.127.png",
    name: "THE RO"
  }, {
    url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/20150519_203927.jpg",
    name: "STEAMER REDESIGN"
  }, {
    url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/Stove/Camp+Stove+Redesign+04+" +
        "Paint.png",
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
    <MainFooter/>, document.getElementById('footer'));

  render(
    <Router history={hashHistory}>
    <Route path="/" component={DefaultComponent}></Route>
    <Route
      path="/projects"
      imageObjects={projectImageObjects}
      component={ImageAlbum}></Route>
  </Router>, document.getElementById('first-section'));

  // render(<ImageGallery imagesInGallery ={[ "http://i.imgur.com/qlK09NA.png",
  // "http://i.imgur.com/MAm4goL.jpg",   "http://i.imgur.com/acSuncc.png",
  // "http://i.imgur.com/iOgoxEb.png",     "http://i.imgur.com/QZTdtds.jpg",
  // "http://i.imgur.com/AcR9ert.png"  ]}/>,
  // document.getElementById('first-section'));
}, false);

class DefaultComponent extends Component {

  render() {

    return (
      <section id="profile" className="section">

        <div className="container">

          <div className="row">

            <div
              className="col-md-12 headline bounceInDown animated"
              style={{
              visibility: 'visible',
              animationName: 'bounceInDown'
            }}>
              <h2>Colin Swenson-Healey</h2>
              <p>Designer. Programmer. Developer</p>
            </div>

            <div
              className="col-md-3 col-sm-6 hidden-xs bounceInLeft animated"
              style={{
              visibility: 'visible',
              animationName: 'bounceInLeft'
            }}>
              <img
                className="avatar"
                src="https://s3-us-west-2.amazonaws.com/web-dev-storage/Portrait.png"
                style={{
                height: '200px'
              }}
                alt=""/>
            </div>

            <div
              className="col-md-3 col-sm-6 wow bounceInUp animated"
              style={{
              visibility: 'visible',
              animationName: 'bounceInUp'
            }}>

              <div className="profile-widget">
                <h3>Skillset</h3>

                <h5>Industrial Design</h5>

                <h5>HTML / CSS3 / SASS</h5>

                <h5>Javascript</h5>

                <h5>React / Jquery / Bootstrap / Node</h5>
              </div>

              <div className="profile-widget">
                <h3>Social</h3>
                <div className="widget-social" lv45phk="" hidden="">

                  <a href="#">
                    <i className="fa fa-facebook fa-fw btn btn-round btn-clear btn-facebook"></i>
                  </a>

                  <a href="#">
                    <i className="fa fa-github-alt btn btn-round btn-clear btn-github"></i>
                  </a>

                  <a href="#">
                    <i className="fa fa-twitter btn btn-round btn-clear btn-twitter"></i>
                  </a>

                  <a href="#">
                    <i className="fa fa-google-plus btn btn-round btn-clear btn-google"></i>
                  </a>

                </div>
              </div>

            </div>

            <div
              className="col-md-6 col-sm-12 wow bounceInRight animated"
              style={{
              visibility: 'visible',
              animationName: 'bounceInRight'
            }}>
              <h3>What I'm about</h3>
              <p>I am a graduate from The Art Institute of Seattle and I am a problem solver
                at heart. I enjoy solving design, programing and engineering problems alike.</p>
              <p>I am probably most interested in technology because of the unique ways it is
                helping people's lives. Technology is all around is and I find excitement in
                adapting technology in new ways to enrich our daily experiences.</p>
            </div>

          </div>

        </div>

      </section>
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
