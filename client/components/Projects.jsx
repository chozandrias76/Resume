import React, {Component} from 'react';
import {render} from 'react-dom';

import ImageAlbum from 'components/ImageAlbum';
import ImageGallery from 'components/ImageGallery';

const projectImageObjects = [
    {
        url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/Regilo+Thumbnail.png",
        name: "REGILO"
    }, {
        url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/3D+Mouse+Thumbnail.png",
        name: `SAMXA'E`
    }, {
        url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/Hellboy+Thumb.png",
        name: "HELLBOY PACKAGE DESIGN"
    }, {
        url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/The+Ro+Thumbnail.png",
        name: "THE RO"
    }, {
        url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/Steamer+Thumbnail.png",
        name: "STEAMER REDESIGN"
    }, {
        url: "https://s3-us-west-2.amazonaws.com/web-dev-storage/Transportation+Design+Thumb.p" +
                "ng",
        name: "TRANSPORTATION DESIGN"
    }
];

class ProjectsComponent extends Component {

    render() {
        const {query} = this.props == undefined
            ? undefined
            : this.props.location;
        const project = query.project;
        switch (project) {
            case undefined:
                return (
                    <div className="projects">
                        <ImageAlbum imageObjects={projectImageObjects}/>
                    </div>
                );
            default:
                return (
                    <div className="projectGallery" id={project}>
                        <ImageGallery productName={project}/>
                    </div>
                );
        }

    }
}

export default ProjectsComponent;