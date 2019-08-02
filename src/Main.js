import React, { Component } from 'react';

// Global Components
import Pagination from './components/Pagination';
// import DateFilter from './components/DateFilter';

// Local Components
import LeftNavigation from './containers/LeftNavigation';
import BottomNavigation from './containers/BottomNavigation';
  
class Main extends Component {
  render() {
    /* eslint-disable jsx-a11y/href-no-hash */
    return (
      <div className="is-preload">
        <LeftNavigation />
        <section className="wrapper">
          <div className="inner">
            <header className="special">
              <h2>Page Listings</h2>
            </header>
            <Pagination />
          </div>
        </section>
        <BottomNavigation />
      </div>  
    );
  }
}

export default Main;
