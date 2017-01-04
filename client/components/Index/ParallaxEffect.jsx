import React, {Component} from 'react';

(function() {

  document.addEventListener('DOMContentLoaded', function(event) { //Run once the page is actually up
    var front = document.getElementById("front");
    front.style.height = window.outerHeight - 200;
  }, false);

  window.addEventListener('resize', function(event) { //Resize based on window size
    front.style.height = window.outerHeight - 200;
  }, false);

  window.addEventListener('scroll', function(event) { //This is how we do the parallax effect
    var depth,
      i,
      layer,
      layers,
      len,
      movement,
      topDistance,
      translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll('[data-type=\'parallax\']');
    for (i = 0, len = layers.length; i < len; i++) {
      //             if (window.CP.shouldStopExecution(1)) {
      //                 break;
      //             }
      layer = layers[i];
      depth = layer.hasAttribute('data-depth')
        ? layer.getAttribute('data-depth')
        : i / layers.length;
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

class ParallaxComponent extends Component {

  render() {
    return (
      <div>
      <div id="front">
          <div crossOrigin className="layer-default layer" data-depth={0.0} data-type="parallax"/>
          <div crossOrigin className="layer-bg layer" data-depth="0.01" data-type="parallax"/>
          <div crossOrigin className="layer-1 layer" data-depth="0.1" data-type="parallax"/>
          <div crossOrigin className="layer-2 layer" data-depth="0.20" data-type="parallax"/>
          <div crossOrigin className="layer-3 layer" data-depth="0.50" data-type="parallax"/>
          <div crossOrigin className="layer-overlay layer" data-depth="0.95" data-type="parallax"/>
        </div>
    <div id = "front-mobile" />
    </div>
    );
  }
}

export default ParallaxComponent;
