import React, {Component} from 'react';
import $ from 'jquery';

class MainFooterComponent extends Component {

    render() {
        return (
            <div>
                <section id="footer" className="section">
                    <div className="container" style={{paddingLeft: 45}}>
                        {/*<div className="row">
                            <div className="col-md-12 headline bounceInLeft animated"></div>
                        </div>*/}
                        <div className="row">
                            <div
                                className="col-md-3 col-sm-6  bounceInUp animated"
                                style={{
                            }}></div>
                            <div className="col-md-3 col-sm-6  bounceInUp animated"></div>
                            <div
                                className="col-md-6  bounceInRight animated"
                                style={{
                                visibility: 'visible',
                                animationName: 'bounceInRight'
                            }}>
                                <h2>Contact Me</h2>
                                <p>Drop me a line!</p>
                                <form
                                    id="contact-form"
                                    role="form"
                                    noValidate=""
                                    action="mailto:colin.p.swensonh@gmail.com"
                                    method="get"
                                    enctype="text/plain">
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="name">Name</label>
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
                                        <label className="sr-only" htmlFor="email">Email address</label>
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
                                            id="messageBox"
                                            name="message"
                                            rows="7"
                                            placeholder="Your message"
                                            required=""></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <button type="submit" name="submit" value="Send" className="btn btn-custom-1">
                                        <i className="fa fa-bullhorn icon-before"></i>
                                        Send it
                                    </button>
                                </form>

                                <div id="contact-response"></div>

                            </div>

                        </div>

                    </div>

                </section>
                <footer id="finalFooter">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-12">
                                <p className="copy">
                                    © 2017 Colin Swenson-Healey, All Rights Reserved.
                                </p>
                            </div>

                        </div>

                    </div>

                </footer>
            </div>
        );
    }
}

export default MainFooterComponent;
