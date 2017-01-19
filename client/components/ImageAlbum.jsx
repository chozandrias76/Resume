import React, {Component} from 'react';
import Link from 'react-router';
import $ from "jquery";

import ImageGallery from 'components/ImageGallery';

function ImageObject(props) {
  var divStyle = {
    backgroundImage: 'url(\'' + props.value.url + '\')'
  };
  return (
    <div className="cover-image" id={props.value.name} style={divStyle}>
      <div className="overlay avoid-clicks">
        <span className="text-overlay no-select avoid-clicks">
          {props.value.name}
        </span>
      </div>
    </div>
   
  );
}

$(".cover-image").on("click", () => render(<ImageGallery imagesInGallery ={[ "http://i.imgur.com/qlK09NA.png",
     "http://i.imgur.com/MAm4goL.jpg",   "http://i.imgur.com/acSuncc.png",
   "http://i.imgur.com/iOgoxEb.png",     "http://i.imgur.com/QZTdtds.jpg",
   "http://i.imgur.com/AcR9ert.png"  ]}/>,
  document.getElementById('first-section')));

    class ImageAlbum extends Component {

      render() {
        const imageObjects = this.props.route.imageObjects;
        return (
          <div>
            {imageObjects.map((imageObject) => <ImageObject key={imageObject.name} value={imageObject}/>)}
          </div>
        );
      }
    }

    export default ImageAlbum;
