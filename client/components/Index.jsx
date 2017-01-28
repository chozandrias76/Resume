import React, {Component} from 'react';
import {render} from 'react-dom';

export default class IndexComponent extends Component {

  render() {

    return (
      <section id="profile" className="section">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 headline bounceInLeft animated"
              style={{
              visibility: 'visible',
              animationName: 'bounceInLeft',
            }}>
              <h2>Colin Swenson-Healey</h2>
              <p>Designer. Programmer. Tinkerer.</p>
            </div>
            </div>
            <div className="row">
            <div
              className="col-md-3 col-sm-6 hidden-xs bounceInLeft animated"
              style={{
              visibility: 'visible',
              animationName: 'bounceInLeft',
              textAlign: 'center'
            }}>
              <img
                className="avatar"
                src="https://s3-us-west-2.amazonaws.com/web-dev-storage/Portrait.png"
                style={{
                height: '200px',  
              }}
                alt=""/>
            </div>

            <div
              className="col-md-3 col-sm-6 wow bounceInLeft animated"
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

                  <a href="https://www.facebook.com/swensonhealeyc">
                    <i className="fa fa-facebook btn btn-round btn-clear btn-facebook"></i>
                  </a>

                  <a href="https://github.com/chozandrias76/">
                    <i className="fa fa-github-alt btn btn-round btn-clear btn-github"></i>
                  </a>

                  <a href="https://twitter.com/xenos76">
                    <i className="fa fa-twitter btn btn-round btn-clear btn-twitter"></i>
                  </a>

                  <a href="https://plus.google.com/u/0/116426537740453446298">
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
                at heart. I enjoy solving design, programming and engineering problems alike.</p>
              <p>I am most interested in technology because of the unique ways it is
                helping people's lives. Technology is all around and I find excitement in
                adapting technology in new ways to enrich our daily experiences.</p>
            </div>

          </div>

        </div>

      </section>
    );
  }
}

