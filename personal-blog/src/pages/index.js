import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import '../layouts/index.css';
import '../styles/layout-overide.css';

const IndexPage = () => (
  <div>
    <h1>Hello World</h1>
    <p>Welcome to Colin's Blog</p>
    <p>Now go build something great.</p>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
);

export default IndexPage;
