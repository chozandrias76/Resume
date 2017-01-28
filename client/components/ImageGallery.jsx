import React, {Component} from 'react';
import $ from "jquery";

import 'styles/gallery.scss';

$(document).ready(function () {
    $('.galleryListImage')
        .on('mouseover', function (e) {
            hideAllSiblings(e);
        })
        .on('mouseout', function (e) {
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

function getProductImages(productName) {
    var imagesInGallery;
    switch (productName) {
        case 'REGILO':
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/thumbs/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/thumbs/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/thumbs/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/thumbs/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/thumbs/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/thumbs/Portfolio+Book6.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/thumbs/Portfolio+Book7.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/thumbs/Portfolio+Book8.png"
            ];
            break;
        case `SAMXA'E`:
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/thumbs/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/thumbs/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/thumbs/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/thumbs/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/thumbs/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/thumbs/Portfolio+Book6.png"
            ];
            break;
        case 'HELLBOY PACKAGE DESIGN':
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/thumbs/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/thumbs/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/thumbs/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/thumbs/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/thumbs/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/thumbs/Portfolio+Book6.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/thumbs/Portfolio+Book7.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/thumbs/Portfolio+Book8.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/thumbs/Portfolio+Book9.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/thumbs/Portfolio+Book10.png"
            ];
            break;
        case 'THE RO':
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/thumbs/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/thumbs/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/thumbs/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/thumbs/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/thumbs/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/thumbs/Portfolio+Book6.png"
            ];
            break;
        case 'STEAMER REDESIGN':
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/thumbs/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/thumbs/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/thumbs/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/thumbs/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/thumbs/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/thumbs/Portfolio+Book6.png"
            ];
            break;
        case 'TRANSPORTATION DESIGN':
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/thumbs/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/thumbs/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/thumbs/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/thumbs/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/thumbs/Portfolio+Book5.png",
            ];
            break;
        default:
            imagesInGallery = [""];
            //default code block
    }
    return imagesInGallery;
}

function setActiveImage(theImageClicked){
    ($(".galleryActiveImage").css('background-image', (theImageClicked.target.style.backgroundImage).replace("/thumbs", "").replace(".png", "-min.png")));
}

class ImageGallery extends Component {
    render() {
        const ourProductImages = getProductImages(this.props.productName);
        var initialActiveImageStyle = ourProductImages != [""]
            ? {
                backgroundImage: `url(${ourProductImages[0].replace("/thumbs", "").replace(".png", "-min.png")})`
            }
            : {
                backgroundImage: `url('https://placehold.it/1000x600')`
            };
        return (
            <div className="galleryWrapper"><br/>
                <div className="galleryActiveImage" id="galleryImage" style={initialActiveImageStyle}></div>
                <div className="galleryList">
                    {ourProductImages
                        .map(function (value) {
                            var divStyle = {
                                backgroundImage: `url(${value})`
                            };
                            return (
                            <div key={value}  style={divStyle} onClick={setActiveImage}  onMouseEnter={hideAllSiblings} onMouseLeave={showAllSiblings} className="galleryListImage link-style">
                                    <div className="no-select" style={{display: 'none', backgroundImage: `url(${value.replace("/thumbs", "").replace(".png", "-min.png")})`}}/>
                                </div>
                                );
                        })}
                </div>
            </div>
        );
    }
}

export default ImageGallery;
