import React, {Component} from 'react';
import {render} from 'react-dom';

import 'styles/main.scss';

import Parallax from 'components/Headers/ParallaxEffect';
import TopNavBar from 'components/Navbars/MainTop';
import MainFooter from 'components/Footers/MainBottom';


class LayoutComponent extends Component {

    render() {
        return (
            <div>
                <Parallax/>
                <TopNavBar/>
                <div>
                    <div id="content">
                        <div className="container">
                            <section id="first-section"></section>
                        </div>
                    </div>
                </div>
                <MainFooter/>
            </div>
        );
    }
}

// class BodyComponent extends Component {   render() {     return (       <div>
//         <div id="content">           <div className="container">
// <section id="first-section"></section>           </div>         </div>
// </div>     );   } }

export default LayoutComponent;