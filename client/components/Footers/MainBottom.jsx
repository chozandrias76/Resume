import React, {Component} from 'react';
import $ from 'jquery';

class MainFooterComponent extends Component {
    createEmail(){
        window.location = `mailto:colin.p.swensonh@gmail.com?subject=${$('messageBox').serialize()}`
    }
    render() {
        return (
            <div>
                <section id="footer" className="section">

                    <div className="container">

                        <div className="row">

                            <div
                                className="col-md-12 headline wow bounceInLeft animated"
                                style={{
                                visibility: 'visible',
                                animationName: 'bounceInLeft'
                            }}></div>

                            <div
                                className="col-md-6 wow bounceInUp animated"
                                style={{
                                visibility: 'visible',
                                animationName: 'bounceInUp'
                            }}></div>

                            <div
                                className="col-md-6 wow bounceInRight animated"
                                style={{
                                visibility: 'visible',
                                animationName: 'bounceInRight'
                            }}>
                                <h2>Contact Me</h2>
                                <p>Drop me a line!</p>
                                <form id="contact-form" role="form" noValidate="">

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
                                            required="">
                                            </textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </form>
                                <button type="submit" onClick={this.createEmail} className="btn btn-custom-1">
                                        <i className="fa fa-bullhorn icon-before"></i>
                                        Send it
                                    </button>
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
