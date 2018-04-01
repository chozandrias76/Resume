import React, { Component } from 'react';
import { render } from 'react-dom';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/web-dev-storage/resume-1.jpg" width={window.outerWidth * 0.5} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        <img src="https://s3-us-west-2.amazonaws.com/web-dev-storage/resume-2.jpg" width={window.outerWidth * 0.5} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>
    );
  }
}

export default AboutMe;
