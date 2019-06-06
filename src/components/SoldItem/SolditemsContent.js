import React, { Component } from 'react';
import ItemSold from './ItemSold';
import ItemNotSold from './ItemNotSold';

class SolditemsContent extends Component {
    render() {
        return (
            <div className="page sub-page">
                <section className="content">
                    <section className="block">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                            <nav className="nav flex-column side-nav">
                                <a className="nav-link icon" href="/profile">
                                    <i className="fa fa-user" />My Profile
                                </a>
                                <a className="nav-link icon" href="/my-ads">
                                    <i className="fa fa-heart" />My Ads Listing
                                </a>
                                <a className="nav-link icon" href="/bookmarks">
                                    <i className="fa fa-star" />Bookmarks
                                </a>
                                <a className="nav-link icon" href="/change-password">
                                    <i className="fa fa-recycle" />Change Password
                                </a>
                                <a className="nav-link active icon" href="/sold-items">
                                    <i className="fa fa-check" />Sold Items
                                </a>
                            </nav>
                            </div>
                            {/*end col-md-3*/}
                            <div className="col-md-9">
                            {/*============ Section Title===================================================================*/}
                            <div className="section-title clearfix">
                                <div className="float-left float-xs-none">
                                <label className="mr-3 align-text-bottom">Sort by: </label>
                                <select name="sorting" id="sorting" className="small width-200px" data-placeholder="Default Sorting">
                                    <option value>Default Sorting</option>
                                    <option value={1}>Newest First</option>
                                    <option value={2}>Oldest First</option>
                                    <option value={3}>Lowest Price First</option>
                                    <option value={4}>Highest Price First</option>
                                </select>
                                </div>
                                <div className="float-right d-xs-none thumbnail-toggle">
                                <a href="/" className="change-class" data-change-from-class="list" data-change-to-class="grid" data-parent-class="items">
                                    <i className="fa fa-th" />
                                </a>
                                <a href="/" className="change-class active" data-change-from-class="grid" data-change-to-class="list" data-parent-class="items">
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