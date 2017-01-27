import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import $ from "jquery";

import ImageGallery from 'components/ImageGallery';

function ImageObject(props) {
  const divStyle = {
    backgroundImage: 'url(\'' + props.value.url + '\')'
  };
  return (
    <Link to={{pathname: '/projects', query: {project: props.value.name}}}>
    <div className="cover-image" id={props.value.name} style={divStyle}>
    
      <div className="overlay avoid-clicks">
        <span className="text-overlay no-select avoid-clicks">
          {props.value.name}
        </span>
      </div>
      
    </div>
    </Link>
  );
}

class ImageAlbum extends Component {

  render() {
    const imageObjects = this.props.imageObjects;
    return (
      <div className="album-container">
        {imageObjects.map((imageObject) => <ImageObject key={imageObject.name} value={imageObject}/>)}
      </div>
    );
  }
}


export default ImageAlbum;
