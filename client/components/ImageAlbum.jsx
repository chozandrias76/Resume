function ImageObject(props){
  var divStyle = {
    backgroundImage: 'url(\'' + props.value.url + '\')'
  };
  return (
        <div className= "cover-image" id={props.value.name} style={divStyle}>
          <div className="overlay">
            <span className="text-overlay">
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

// module.exports = Test;
export default ImageAlbum;
