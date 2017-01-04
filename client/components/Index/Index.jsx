import React, {Component} from 'react';

(function () {
  var front;
  front = document.getElementById("front");
  //front.style.height = window.outerHeight;

  // try{
  // front.style.height = window.outerHeight - 200;}
  // catch (e){
  //   console.log(e);
  // }
  //   window.addEventListener('resize', function(event) {
  //     front.style.height = window.outerHeight - 200;
  //   });
    window.addEventListener('scroll', function (event) {
        var depth, i, layer, layers, len, movement, topDistance, translate3d;
        topDistance = this.pageYOffset;
        layers = document.querySelectorAll('[data-type=\'parallax\']');
        for (i = 0, len = layers.length; i < len; i++) {
//             if (window.CP.shouldStopExecution(1)) {
//                 break;
//             }
            layer = layers[i];
					  depth = layer.hasAttribute('data-depth') ? layer.getAttribute('data-depth') : i / layers.length;
            movement = -(topDistance * depth);
            translate3d = `translate3d(0, ${movement}px, 0)`;
            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;
        }
//         window.CP.exitedLoop(1);
    });
})();

class IndexComponent extends Component {
  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" type="text/css"/>
        <script src="app.js"></script>
        <link rel="stylesheet" href="/client/styles/main.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css"/> {/* Source Image  https://www.artstation.com/artwork/50JvP*/}

        <div id="front" style={{
          height: 800
        }}>
          <div crossOrigin className="layer-default layer" data-depth={0.0} data-type="parallax"><canvas/></div>
          <div crossOrigin className="layer-bg layer" data-depth="0.01" data-type="parallax"/>
          <div crossOrigin className="layer-1 layer" data-depth="0.1" data-type="parallax"/>
          <div crossOrigin className="layer-2 layer" data-depth="0.20" data-type="parallax"/>
          <div crossOrigin className="layer-3 layer" data-depth="0.50" data-type="parallax"/>
          <div crossOrigin className="layer-overlay layer" data-depth="0.95" data-type="parallax"/>
        </div>
        <div id="front-mobile"/>
        <div id="content">
        {/* <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><img src="https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/56cf7949555986536eb56dcd/1470171109698/?format=1000w" width={30} className="text-center" /></a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="#projects">Projects</a></li>
            <li><a href="#about-me">About</a></li>
          </ul>
        </div>
      </nav> */}

          <div className="container">
            <section className="first-section">
              <div className="row">
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569708963b0be3f9ce875be0/1452738819808/Render+07.png?format=750w")'
                }}>
                  <div id="overlay" width={300} height={300}>
                    <span id="text-overlay">REGILO</span>
                  </div>
                </div>
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569707b00e4c119a540baff5/1452738538984/Usability+Final.png?format=750w")'
                }}>
                  <div id="overlay" width={300} height={300}>
                    <span id="text-overlay">SAMXA'E</span>
                  </div>
                </div>
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569706e4df40f306cad901e1/1452738288707/_MG_1197.jpg?format=750w")'
                }}>
                  <div id="overlay" width={300} height={300}>
                    <span id="text-overlay">HELLBOY PACKAGE DESIGN</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569706384bf118ce98c78a8c/1452738156214/Cutaway.127.png?format=750w")'
                }}>
                  <div id="overlay" width={300} height={300}>
                    <span id="text-overlay">THE RO</span>
                  </div>
                </div>
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/5760ee02e707eb1822a13d8b/1465970186124/20150519_203927.jpg?format=500w")'
                }}>
                  <div id="overlay" width={300} height={300}>
                    <span id="text-overlay">STEAMER REDESIGN</span>
                  </div>
                </div>
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/5760e9d627d4bdcb665722d8/1465969229638/Camp+Stove+Redesign+04+Paint.png?format=750w")'
                }}>
                  <div id="overlay" width={300} height={300}>
                    <span id="text-overlay">GRILL TEK</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>


    );
    // return (
    //   <section>
    //     <h2>react-webpack-boilerplate</h2>
    //     <ul ref="indexList" className="index-list">
    //       {this.props.items.map((item, index) => {
    //         return (<li key={index}>item {item}</li>);
    //       })}
    //     </ul>
    //   </section>
    // );

  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
