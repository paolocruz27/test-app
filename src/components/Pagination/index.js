import React, { Component } from 'react';
import { render } from 'react-dom';
import Pagination from 'react-paginating';
import moment from 'moment-timezone';

// Listed Timeline
const timeline = [
  ['Today'],
  ['Yesterday'],
  ['Last Week'],
  ['This Month']
];
// Listed Dates

const dates = [
    [moment().format('MMMM Do YYYY, h:mm:ss a')],
    ['August 1 2019, 12:00AM'],
    ['July 24, 2019, 05:43PM'],
    [moment().format('MMMM Do YYYY, h:mm:ss a')],
]
// Listed Devices
const devices = [
    ['Samsung: ', 'Samsung Note'],
    ['Apple: ', 'Iphone X'],
    ['Huawei: ', 'Huawei A3s'],
    ['Oppo: ', 'Oppo A5s']
  ];

// Listed Ip Addresses
const ipAddress = [
    ['Philippines', '221.200.10.18'],
    ['Korea', '222.108.9.19'],
    ['China', '223.104.7.11'],
    ['Vietnam', '224.106.5.12'],
]
const limit = 2;
const pageCount = 3;
const total = timeline.length * limit;


export default class PaginationComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  }

  handlePageChange = (page, e) => {
    this.setState({
      currentPage: page
    });
    console.log(page)
  };

  handleSelectChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div className="c-pagination">
        <ul>
          {timeline[currentPage - 1].map(item => <li key={item}>{item}</li>)}
        </ul>
        {/* <div className="c-selected-filters">
            <select onChange={this.handleSelectChange}>
                <option value="Today">Today</option>
                <option value="Yesterday">Yesterday</option>
                <option value="Last Week">Last Week</option>
                <option value="This Month">This Month</option>
            </select> 
        </div> */}
        <div className="c-selected-items">
            <span>DateTime: {dates[currentPage - 1].map(item => <span className="devices" key={item}>{item}</span>)}</span>
            <span>Device: {devices[currentPage - 1].map(item => <span className="devices" key={item}>{item}</span>)}</span>
            <span>IP: {ipAddress[currentPage - 1].map(item => <span className="devices" key={item}>{item}</span>)}</span>
        </div>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div>
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {'<'}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: '#fdce09' };
                }
                return (
                  <button
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {'>'}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}