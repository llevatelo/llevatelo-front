import React, { Component } from 'react';
import Logo from './assets/img/logo.png';

class NavbarCollapse extends Component {
    render() {
        return (
            <div className="main-navigation">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                    <a className="navbar-brand" href="index.html">
                        <img src={Logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        {/*Main navigation list*/}
                        <ul className="navbar-nav">
                        <li className="nav-item active has-child">
                            <a className="nav-link" href="/">Home</a>
                            <ul className="child">
                            <li className="nav-item">
                                <a href="index.html" className="nav-link">Home 1</a>
                            </li>
                            <li className="nav-item">
                                <a href="index-2.html" className="nav-link">Home 2</a>
                            </li>
                            <li className="nav-item">
                                <a href="index-3.html" className="nav-link">Home 3</a>
                            </li>
                            <li className="nav-item">
                                <a href="index-4.html" className="nav-link">Home 4</a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item has-child">
                            <a className="nav-link" href="/">Listing</a>
                            {/* 1st level */}
                            <ul className="child">
                            <li className="nav-item has-child">
                                <a href="/" className="nav-link">Grid</a>
                                {/* 2nd level */}
                                <ul className="child">
                                <li className="nav-item">
                                    <a href="listing-grid-full-width.html" className="nav-link">Full Width</a>
                                </li>
                                <li className="nav-item">
                                    <a href="listing-grid-sidebar.html" className="nav-link">With Sidebar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="listing-grid-compact-sidebar.html" className="nav-link">Compact With Sidebar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="listing-grid-compact-full-width.html" className="nav-link">Compact Full Width</a>
                                </li>
                                </ul>
                                {/* end 2nd level */}
                            </li>
                            <li className="nav-item has-child">
                                <a href="/" className="nav-link">List</a>
                                {/* 2nd level */}
                                <ul className="child">
                                <li className="nav-item">
                                    <a href="listing-list-full-width.html" className="nav-link">Full Width</a>
                                </li>
                                <li className="nav-item">
                                    <a href="listing-list-sidebar.html" className="nav-link">With Sidebar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="listing-list-compact-sidebar.html" className="nav-link">Compact With Sidebar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="listing-list-compact-full-width.html" className="nav-link">Compact Full Width</a>
                                </li>
                                </ul>
                                {/* end 2nd level */}
                            </li>
                            <li className="nav-item has-child">
                                <a href="/" className="nav-link">Masonry</a>
                                {/* 2nd level */}
                                <ul className="child">
                                <li className="nav-item">
                                    <a href="listing-masonry-full-width.html" className="nav-link">Full Width</a>
                                </li>
                                <li className="nav-item">
                                    <a href="listing-masonry-sidebar.html" className="nav-link">With Sidebar</a>
                                </li>
                                </ul>
                                {/* end 2nd level */}
                            </li>
                            <li className="nav-item has-child">
                                <a href="/" className="nav-link">Single</a>
                                {/* 2nd level */}
                                <ul className="child">
                                <li className="nav-item">
                                    <a href="single-listing-1.html" className="nav-link">Single 1</a>
                                </li>
                                <li className="nav-item">
                                    <a href="single-listing-2.html" className="nav-link">Single 2</a>
                                </li>
                                <li className="nav-item">
                                    <a href="single-listing-3.html" className="nav-link">Single 3</a>
                                </li>
                                </ul>
                                {/* end 2nd level */}
                            </li>
                            </ul>
                            {/* end 1st level */}
                        </li>
                        <li className="nav-item has-child">
                            <a className="nav-link" href="/">Pages</a>
                            {/* 2nd level */}
                            <ul className="child">
                            <li className="nav-item">
                                <a href="sellers.html" className="nav-link">Sellers</a>
                            </li>
                            <li className="nav-item has-child">
                                <a href="/" className="nav-link">Seller Detail</a>
                                {/* 3rd level */}
                                <ul className="child">
                                <li className="nav-item">
                                    <a href="seller-detail-1.html" className="nav-link">Seller Detail
                                    1</a>
                                </li>
                                <li className="nav-item">
                                    <a href="seller-detail-2.html" className="nav-link">Seller Detail
                                    2</a>
                                </li>
                                </ul>
                                {/* end 3rd level */}
                            </li>
                            <li className="nav-item">
                                <a href="blog.html" className="nav-link">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="blog-post.html" className="nav-link">Blog Post</a>
                            </li>
                            <li className="nav-item">
                                <a href="submit.html" className="nav-link">Submit Ad</a>
                            </li>
                            <li className="nav-item">
                                <a href="pricing.html" className="nav-link">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a href="faq.html" className="nav-link">FAQ</a>
                            </li>
                            </ul>
                            {/* end 2nd level */}
                        </li>
                        <li className="nav-item has-child">
                            <a className="nav-link" href="/">Extras</a>
                            {/*1st level */}
                            <ul className="child">
                            <li className="nav-item has-child">
                                <a href="/" className="nav-link">Grid Variants</a>
                                <ul className="child">
                                <li className="nav-item">
                                    <a href="listing-grid-4-items.html" className="nav-link">4 Items</a>
                                </li>
                                <li className="nav-item">
                                    <a href="listing-grid-3-items.html" className="nav-link">3 Items</a>
                                </li>
                                <li className="nav-item">
                                    <a href="listing-grid-2-items.html" className="nav-link">2 Items</a>
                                </li>
                                </ul>
                            </li>
                            <li className="nav-item has-child">
                                <a href="/" className="nav-link">User Panel</a>
                                <ul className="child">
                                <li className="nav-item">
                                    <a href="my-profile.html" className="nav-link">My Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a href="my-ads.html" className="nav-link">My Ads</a>
                                </li>
                                <li className="nav-item">
                                    <a href="change-password.html" className="nav-link">Change
                                    Password</a>
                                </li>
                                <li className="nav-item">
                                    <a href="sign-in.html" className="nav-link">Sign In</a>
                                </li>
                                <li className="nav-item">
                                    <a href="register.html" className="nav-link">Register</a>
                                </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="elements.html" className="nav-link">Elements</a>
                            </li>
                            <li className="nav-item">
                                <a href="typography.html" className="nav-link">Typography</a>
                            </li>
                            <li className="nav-item has-child">
                                <a href="/" className="nav-link">Nested Navigation</a>
                                {/*2nd level */}
                                <ul className="child">
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Level 2</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Level 2</a>
                                </li>
                                <li className="nav-item has-child">
                                    <a href="/" className="nav-link">Level 2</a>
                                    {/*3rd level */}
                                    <ul className="child">
                                    <li className="nav-item has-child">
                                        <a href="/" className="nav-link">Level 3</a>
                                        {/*4th level */}
                                        <ul className="child">
                                        <li className="nav-item">
                                            <a href="/" className="nav-link">Level 4</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/" className="nav-link">Level 4</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/" className="nav-link">Level 4</a>
                                        </li>
                                        </ul>
                                        {/* end 4th level*/}
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="nav-link">Level 3</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="nav-link">Level 3</a>
                                    </li>
                                    </ul>
                                    {/*end 3rd level*/}
                                </li>
                                </ul>
                                {/* end 2nd level */}
                            </li>
                            <li className="nav-item">
                                <a href="image-header.html" className="nav-link">Image Header</a>
                            </li>
                            <li className="nav-item">
                                <a href="messaging.html" className="nav-link">Messages</a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="submit.html" className="btn btn-primary text-caps btn-rounded btn-framed">Submit Ad</a>
                        </li>
                        </ul>
                        {/*Main navigation list*/}
                    </div>
                    {/*end navbar-collapse*/}
                    <a href="#collapseMainSearchForm" className="main-search-form-toggle" data-toggle="collapse" aria-expanded="false" aria-controls="collapseMainSearchForm">
                        <i className="fa fa-search" />
                        <i className="fa fa-close" />
                    </a>
                    {/*end main-search-form-toggle*/}
                    </nav>
                    {/*end navbar*/}
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/">Library</a></li>
                    <li className="breadcrumb-item active">Data</li>
                    </ol>
                    {/*end breadcrumb*/}
                </div>
                {/*end container*/}
            </div>
        );
    }
}

export default NavbarCollapse;