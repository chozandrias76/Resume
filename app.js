
(function () {
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
// var url = 'http://i.imgur.com/CVFdGa7.png';
// $.ajax({
//   url: url,
//   success: function(data) {
//    //$(".layer-bg").css("background-image" , `url('${data}')`);
// 		$(".layer-bg").css("background-image" , `url('data:image/png;base64,${data})`);
// 		//console.log(data);
//     },
//   error: function() {
//         // Something went wrong
//     }
// });
