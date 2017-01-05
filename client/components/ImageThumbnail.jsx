import React, { Component } from 'react';

class ImageThumbnailComponent extends Component {
  render() {
    if (this.props.imageObjects.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }
    var url = "https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569708963b0be3f9ce875be0/1452738819808/Render+07.png?format=750w";
    var name = "REGILO"
    return (
          <div id="cover-image" style={{
            backgroundImage: `url('` + `')`
          }}>
            <div class="overlay">
              <span class="text-overlay">

              </span>
            </div>
          </div>
    );
  }
}

// var Test = React.createClass({
//   render: function() {
//     var imageThumbnails = this.props.imageObjects.map(function(imageObject){
//       return(
//         <div id="cover-image" style={{
//           backgroundImage: `url('` + {imageObject} + `')`
//         }}>
//           <div id="overlay">
//             <span id="text-overlay">
//             {imageObject.name}
//             </span>
//           </div>
//         </div>
//       );
//     });
//   }
// });

ImageThumbnailComponent.defaultProps = {
  items: []
};
// module.exports = Test;
export default ImageThumbnailComponent;
