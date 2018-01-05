import React, { Component } from 'react';
import { render } from 'react-dom';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/web-dev-storage/About+Me-min.png" width={window.outerWidth * 0.5} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        <img src="https://s3-us-west-2.amazonaws.com/web-dev-storage/About+Me2-min.png" width={window.outerWidth * 0.5} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>
    );
  }
}

export default AboutMe;
