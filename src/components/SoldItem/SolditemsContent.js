import React, { Component } from "react";
import ItemSold from "./ItemSold";
import ItemNotSold from "./ItemNotSold";
import NavItems from "../Navbar/NavItems";

class SolditemsContent extends Component {
  render() {
    return (
      <div className="page sub-page">
        <section className="content">
          <section className="block">
            <div className="container">
              <div className="row">
                <NavItems path="SoldItems" />
                {/*end col-md-3*/}
                <div className="col-md-9">
                  {/*============ Section Title===================================================================*/}
                  <div className="section-title clearfix">
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
                  <div className="items list grid-xl-3-items grid-lg-3-items grid-md-2-items">
                    <ItemSold />
                    <ItemNotSold />
                    <ItemSold />
                    <ItemNotSold />
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

export default SolditemsContent;
