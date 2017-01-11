import React, {Component} from 'react';
import $ from "jquery";

$(document).ready(function () {
    $(document)
        .on('mouseover', '.galleryListImage', function (e) {
            hideAllSiblings(e);
        })
        .on('click', '.galleryListImage', function (){
            var newUrl = $(this).css("background-image");
            //alert(newUrl)
            $(this).parent().siblings(".galleryActiveImage").css({'background-image':newUrl});
            //setgalleryActiveImage(e);
        })
        .on('mouseout', '.galleryListImage', function (e) {
            showAllSiblings(e);
        });
});

function hideAllSiblings(elm) {
    $(elm.target)
        .siblings()
        .removeClass("fadeInElem")
        .addClass("fadeOutElem");
}
function showAllSiblings(elm) {
    $(elm.target)
        .siblings()
        .removeClass("fadeOutElem")
        .addClass("fadeInElem");
}

class ImageGallery extends Component {
    render() {
        return (
            <div className="galleryWrapper"><br/>
                <div className="galleryActiveImage"></div>
                <div className="galleryList">
                    {this
                        .props
                        .imagesInGallery
                        .map(function (value) {
                            var divStyle = {
                                backgroundImage: `url(${value})`
                            };
                            return <div key={value} style={divStyle} className="galleryListImage"></div>
                        })}
                </div>
            </div>
        );
    }
}

export default ImageGallery;
