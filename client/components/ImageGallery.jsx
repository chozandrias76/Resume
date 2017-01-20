import React, {Component} from 'react';
import $ from "jquery";

import 'styles/gallery.scss';

$(document)
.ready(function () {
    $('.galleryListImage')
        .on('mouseover', function (e) {
            hideAllSiblings(e);
        })
        .on('click', function (e) {
            var newUrl = $(e.target).css("background-image");
            //alert(newUrl)
            $(this)
                .parent()
                .siblings(".galleryActiveImage")
                .css({'background-image': newUrl});
            //setgalleryActiveImage(e);
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
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/Portfolio+Book6.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/Portfolio+Book7.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo/Portfolio+Book8.png"
            ];
            break;
        case `SAMXA'E`:
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+mouse/Portfolio+Book6.png"
            ];
            break;
        case 'HELLBOY PACKAGE DESIGN':
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/Portfolio+Book6.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/Portfolio+Book7.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/Portfolio+Book8.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/Portfolio+Book9.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy/Portfolio+Book10.png"
            ];
            break;
        case 'THE RO':
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/Portfolio+Book1.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro/Portfolio+Book6.png",
            ];
            break;
        case 'STEAMER REDESIGN':
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/Portfolio+Book1.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer/Portfolio+Book6.png",

            ];
            break;
        case 'TRANSPORTATION DESIGN':
            imagesInGallery = [
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/Portfolio+Book.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/Portfolio+Book1.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/Portfolio+Book2.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/Portfolio+Book3.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/Portfolio+Book4.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/Portfolio+Book5.png",
                "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design/Portfolio+Book6.png",
            ];
            break;
        default:
            imagesInGallery = [""];
            //default code block
    }
    return imagesInGallery;
}

class ImageGallery extends Component {
    render() {
        const ourProductImages = getProductImages(this.props.productName);
        const initialActiveImageStyle = ourProductImages != [""] ? {backgroundImage: `url(${ourProductImages[0]})`} : {backgroundImage: `url('https://placehold.it/1000x600')`};
        return (
            <div className="galleryWrapper"><br/>
    <div className="galleryActiveImage" style={initialActiveImageStyle}></div>
                <div className="galleryList">
                    {ourProductImages
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
