import React, {Component} from 'react';

class MainFooterComponent extends Component {

    render() {
        return (
            <section id="contact" class="section">

                <div className="container">

                    <div className="row">

                        <div
                            className="col-md-12 headline wow bounceInLeft animated"
                            style={{
                            visibility: 'visible',
                            animationName: 'bounceInLeft'
                        }}>
                           
                        </div>

                        <div
                            className="col-md-6 wow bounceInUp animated"
                            style={{
                            visibility: 'visible',
                            animationName: 'bounceInUp'
                        }}>
                        
                            {/*<p>I am alone, and feel the charm of existence in this spot, which was created
                                for the bliss of souls like mine. I am so happy, my dear friend.</p>/*}

                            {/*<ul className="icon-list">
                                <li>
                                    <i className="fa fa-fw fa-map-marker"></i>001 Some Street, Some City, US</li>
                                <li>
                                    <i className="fa fa-fw fa-phone"></i>123 4567 8910</li>
                                <li>
                                    <i className="fa fa-fw fa-envelope-o"></i>
                                    <a href="mailto:">support@site.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-fw fa-globe"></i>
                                    <a href="">http://www.site.com</a>
                                </li>
                            </ul>*/}

                        </div>

                        <div
                            className="col-md-6 wow bounceInRight animated"
                            style={{
                            visibility: 'visible',
                            animationName: 'bounceInRight'
                        }}>
 <h2>Contact Me</h2>
                            <p>Drop me a line!</p>
                            <form id="contact-form" role="form" novalidate="">

                                <div className="form-group">
                                    <label className="sr-only" for="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name"
                                        required=""/>
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="form-group">
                                    <label className="sr-only" for="email">Email address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="E-mail"
                                        required=""/>
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="7"
                                        placeholder="Your message"
                                        required=""></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>

                                <button type="submit" className="btn btn-custom-1">
                                    <i className="fa fa-bullhorn icon-before"></i>
                                    Send it
                                </button>

                            </form>

                            <div id="contact-response"></div>

                        </div>

                    </div>

                </div>

            </section>
        );
    }
}

export default MainFooterComponent;
