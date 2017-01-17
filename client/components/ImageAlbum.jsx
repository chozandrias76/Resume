import React, {Component} from 'react';
import $ from "jquery";

function ImageObject(props) {
  var divStyle = {
    backgroundImage: 'url(\'' + props.value.url + '\')',
    //onclick: `window.location.href='/${props.value.name}';`
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
