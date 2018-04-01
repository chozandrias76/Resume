import React, { Component } from 'react';
import { render } from 'react-dom';

class BlogComponent extends Component {

    render() {
    return (
      <div>
        <h1>Coming soon!&#8482;</h1>
        <iframe src="http://localhost:8000/"  style={{ width: '100%', height: '100%' }}/>
      </div>
    );
  }
}

export default BlogComponent;
