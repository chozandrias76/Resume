import React, {Component} from 'react';

(function () {

  window.addEventListener('resize', function (event) { //Resize based on window size
    document.getElementById("parallax-area").style.height = window.outerHeight-175;
  }, false);

  window.addEventListener('scroll', function (event) { //This is how we do the parallax effect
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
      //             if (window.CP.shouldStopExecution(1)) {                 break;
      //          }
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

window.mobilecheck = function () {
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) 
        check = true;
      }
    )(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

class ParallaxComponent extends Component {
componentDidMount(){
}
  render() {
    switch (window.mobilecheck()) {
      case false: 
        return (
          <div id="parallax-area" style={{height: `${window.outerHeight - 175}`}}>
            <div
              crossOrigin
              className="layer-default layer"
              data-depth={0.0}
              data-type="parallax"/>
            <div
              crossOrigin
              className="layer-bg layer"
              data-depth="0.01"
              data-type="parallax"/>
            <div
              crossOrigin
              className="layer-1 layer"
              data-depth="0.1"
              data-type="parallax"/>
            <div
              crossOrigin
              className="layer-2 layer"
              data-depth="0.20"
              data-type="parallax"/>
            <div
              crossOrigin
              className="layer-3 layer"
              data-depth="0.50"
              data-type="parallax"/>
            <div
              crossOrigin
              className="layer-overlay layer"
              data-depth="0.95"
              data-type="parallax"/>
          </div>

        );
      case true: return(<div id="parallax-area-mobile" style={{height: `${window.outerHeight - 175}`}}/>)
    }
  }
}

export default ParallaxComponent;
