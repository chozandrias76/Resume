import React, {Component} from 'react';
import $ from "jquery";

import 'styles/gallery.scss';

$(document)
.ready(function () {
    $('.galleryListImage')
        .on('mouseover', function (e) {
            hideAllSiblings(e);
        })
        .on('click', function () {
            var newUrl = $(this).css("background-image");
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
                "http://i.imgur.com/qlK09NA.png",
                "http://i.imgur.com/MAm4goL.jpg",
                "http://i.imgur.com/acSuncc.png",
                "http://i.imgur.com/iOgoxEb.png",
                "http://i.imgur.com/QZTdtds.jpg",
                "http://i.imgur.com/AcR9ert.png"
            ];
            break;
        case `SAMXA'E`:
            imagesInGallery = [
                "http://i.imgur.com/qlK09NA.png",
                "http://i.imgur.com/MAm4goL.jpg",
                "http://i.imgur.com/acSuncc.png",
                "http://i.imgur.com/iOgoxEb.png",
                "http://i.imgur.com/QZTdtds.jpg",
                "http://i.imgur.com/AcR9ert.png"
            ];
            break;
        case 'HELLBOY PACKAGE DESIGN':
            imagesInGallery = [
                "http://i.imgur.com/qlK09NA.png",
                "http://i.imgur.com/MAm4goL.jpg",
                "http://i.imgur.com/acSuncc.png",
                "http://i.imgur.com/iOgoxEb.png",
                "http://i.imgur.com/QZTdtds.jpg",
                "http://i.imgur.com/AcR9ert.png"
            ];
            break;
        case 'THE RO':
            imagesInGallery = [
                "http://i.imgur.com/qlK09NA.png",
                "http://i.imgur.com/MAm4goL.jpg",
                "http://i.imgur.com/acSuncc.png",
                "http://i.imgur.com/iOgoxEb.png",
                "http://i.imgur.com/QZTdtds.jpg",
                "http://i.imgur.com/AcR9ert.png"
            ];
            break;
        case 'STEAMER REDESIGN':
            imagesInGallery = [
                "http://i.imgur.com/qlK09NA.png",
                "http://i.imgur.com/MAm4goL.jpg",
                "http://i.imgur.com/acSuncc.png",
                "http://i.imgur.com/iOgoxEb.png",
                "http://i.imgur.com/QZTdtds.jpg",
                "http://i.imgur.com/AcR9ert.png"
            ];
            break;
        case 'TRANSPORTATION DESIGN':
            imagesInGallery = [
                "http://i.imgur.com/qlK09NA.png",
                "http://i.imgur.com/MAm4goL.jpg",
                "http://i.imgur.com/acSuncc.png",
                "http://i.imgur.com/iOgoxEb.png",
                "http://i.imgur.com/QZTdtds.jpg",
                "http://i.imgur.com/AcR9ert.png"
            ];
            break;
        default:
            imagesInGallery = [];
            //default code block
    }
    return imagesInGallery;
}

class ImageGallery extends Component {
    render() {
        var ourProductImages = getProductImages(this.props.productName);
        return (
            <div className="galleryWrapper"><br/>
                <div className="galleryActiveImage"></div>
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
