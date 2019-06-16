import React, { Component } from "react";
import NavItems from "../Navbar/NavItems";
import AdsItemFeatured from "./AdsItemFeatured";

class AdsContent extends Component {
  render() {
    return (
      <div className="page sub-page">
        <section className="content">
          <section className="block">
            <div className="container">
              <div className="row">
                <NavItems path="Ads" />
                {/*end col-md-3*/}
                <div className="col-md-9">
                  {/*============ Section Title===================================================================*/}
                  <div className="section-title clearfix">
                    <div className="float-left float-xs-none">
                      <label className="mr-3 align-text-bothrefm">
                        Sort by:{" "}
                      </label>
                      <select
                        name="sorting"
                        id="sorting"
                        className="small width-200px"
                        data-placeholder="Default Sorting"
                      >
                        <option value>Default Sorting</option>
                        <option value={1}>Newest First</option>
                        <option value={2}>Oldest First</option>
                        <option value={3}>Lowest Price First</option>
                        <option value={4}>Highest Price First</option>
                      </select>
                    </div>
                    <div className="float-right d-xs-none thumbnail-toggle">
                      <a
                        href="/"
                        className="change-class"
                        data-change-from-class="list"
                        data-change-to-class="grid"
                        data-parent-class="items"
                      >
                        <i className="fa fa-th" />
                      </a>
                      <a
                        href="/"
                        className="change-class active"
                        data-change-from-class="grid"
                        data-change-to-class="list"
                        data-parent-class="items"
                      >
                        <i className="fa fa-th-list" />
                      </a>
                    </div>
                  </div>
                  {/*============ Items ==========================================================================*/}
                  <div className="items list compact grid-xl-3-items grid-lg-2-items grid-md-2-items">
                    <AdsItemFeatured featured="true" />
                    <AdsItemFeatured featured="true" />
                    <AdsItemFeatured />
                    <AdsItemFeatured />
                  </div>
                  {/*end items*/}
                </div>
                {/*end col-md-9*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
          {/*end block*/}
        </section>
      </div>
    );
  }
}

export default AdsContent;
