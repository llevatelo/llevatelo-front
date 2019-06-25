import React, { Component } from "react";
import ItemSold from "./ItemSold";
import Item from "./Item";

class Items extends Component {
  render() {
    return (
      <div className="page sub-page">
        <section className="content">
          <section className="block">
            <div className="container">
              <div className="items grid grid-xl-4-items grid-lg-3-items grid-md-2-items">
                <ItemSold />
                <Item city="Nashville, TN" />
                <Item city="Dallas, TX" />
                <Item city="Provo, UT" />

                <a href="/create-article" className="item call-to-action">
                  <div className="wrapper">
                    <div className="title">
                      <i className="fa fa-plus-square-o" />
                      Create An Article
                    </div>
                  </div>
                </a>

                <Item city="Manhattan, NY" />
                <Item city="Seattle, WA" />
                <Item city="Detroit, MI" />
                <Item city="Long Beach, CA" />
              </div>
              <div className="page-pagination">
                <nav aria-label="Pagination">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="/" aria-label="Previous">
                        <span aria-hidden="true">
                          <i className="fa fa-chevron-left" />
                        </span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="/">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/" aria-label="Next">
                        <span aria-hidden="true">
                          <i className="fa fa-chevron-right" />
                        </span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Items;
