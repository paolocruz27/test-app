import React, { Component, Fragment } from 'react';

export default class LeftNavigationComponent extends Component {
  render() {
    return (
      <Fragment> 
        <header id="header">
          <a className="logo" href="index.html">IceFox</a>
        </header>
      </Fragment>
    );
  }
}
