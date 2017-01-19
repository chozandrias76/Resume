import React, {Component} from 'react';

class TopNavbarComponent extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><img
              src="https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/56cf7949555986536eb56dcd/1470171109698/?format=1000w"
              width={30}
              className="text-center"/></a>
          </div>
          <ul className="nav navbar-nav navbar-right">

            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#about-me">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNavbarComponent;
