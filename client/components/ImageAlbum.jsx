import React from 'react';
import $ from "jquery";

$(document).ready(function () {
    $(document)

        .on('click', '.cover-image', function (){
            var newUrl = $(this).attr('id');
            //alert(newUrl)
            //window.location.replace(`projects?name=${newUrl}`);
        });
});

function ImageObject(props){
  var divStyle = {
    backgroundImage: 'url(\'' + props.value.url + '\')',
    onclick: `window.location.href='/${props.value.name}';`
  };
  return (
        <div className= "cover-image" id={props.value.name} style={divStyle}>
          <div className="overlay avoid-clicks">
            <span className="text-overlay no-select avoid-clicks">
              {props.value.name}
            </span>
          </div>
        </div>
  );
}

function ImageAlbum(props) {
  const imageObjects = props.imageObjects;
  return (
    <div>
      {imageObjects.map((imageObject) =>
                <ImageObject key={imageObject.name}
                          value={imageObject} />
    )}
  </div>
  );
}

export default ImageAlbum;
