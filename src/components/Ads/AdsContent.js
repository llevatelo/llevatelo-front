import React, { Component } from 'react';
import Image01 from '../assets/img/image-01.jpg';
import Image02 from '../assets/img/image-02.jpg';
import Image03 from '../assets/img/image-03.jpg';
import Image04 from '../assets/img/image-04.jpg';

class AdsContent extends Component {
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
                                <a className="nav-link active icon" href="/my-ads">
                                    <i className="fa fa-heart" />My Ads Listing
                                </a>
                                <a className="nav-link icon" href="/bookmarks">
                                    <i className="fa fa-star" />Bookmarks
                                </a>
                                <a className="nav-link icon" href="/change-password">
                                <i className="fa fa-recycle" />Change Password
                                </a>
                                <a className="nav-link icon" href="/sold-items">
                                <i className="fa fa-check" />Sold Items
                                </a>
                            </nav>
                            </div>
                            {/*end col-md-3*/}
                            <div className="col-md-9">
                            {/*============ Section Title===================================================================*/}
                            <div className="section-title clearfix">
                                <div className="float-left float-xs-none">
                                <label className="mr-3 align-text-bothrefm">Sort by: </label>
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
                            <div className="items list compact grid-xl-3-items grid-lg-2-items grid-md-2-items">
                                <div className="item">
                                <div className="ribbon-featured">Featured</div>
                                {/*end ribbon*/}
                                <div className="wrapper">
                                    <div className="image">
                                    <h3>
                                        <a href="/" className="tag category">Home &amp; Decor</a>
                                        <a href="single-listing-1.html" className="title">Furniture for sale</a>
                                        <span className="tag">Offer</span>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src={Image01} alt="" />
                                    </a>
                                    </div>
                                    {/*end image*/}
                                    <h4 className="location">
                                    <a href="/">Manhattan, NY</a>
                                    </h4>
                                    <div className="price">$80</div>
                                    <div className="admin-controls">
                                    <a href="edit-ad.html">
                                        <i className="fa fa-pencil" />Edit
                                    </a>
                                    <a href="/" className="ad-hide">
                                        <i className="fa fa-eye-slash" />Hide
                                    </a>
                                    <a href="/" className="ad-remove">
                                        <i className="fa fa-trash" />Remove
                                    </a>
                                    </div>
                                    {/*end admin-controls*/}
                                    <div className="description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                                    </div>
                                    {/*end description*/}
                                    <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                                </div>
                                </div>
                                {/*end item*/}
                                <div className="item">
                                <div className="wrapper">
                                    <div className="image">
                                    <h3>
                                        <a href="/" className="tag category">Education</a>
                                        <a href="single-listing-1.html" className="title">Creative Course</a>
                                        <span className="tag">Offer</span>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src={Image02} alt="" />
                                    </a>
                                    </div>
                                    {/*end image*/}
                                    <h4 className="location">
                                    <a href="/">Nashville, TN</a>
                                    </h4>
                                    <div className="price">$125</div>
                                    <div className="admin-controls">
                                    <a href="edit-ad.html">
                                        <i className="fa fa-pencil" />Edit
                                    </a>
                                    <a href="/" className="ad-hide">
                                        <i className="fa fa-eye-slash" />Hide
                                    </a>
                                    <a href="/" className="ad-remove">
                                        <i className="fa fa-trash" />Remove
                                    </a>
                                    </div>
                                    {/*end admin-controls*/}
                                    <div className="description">
                                    <p>Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus, eget suscipit tellus tincidunt sit amet. </p>
                                    </div>
                                    {/*end description*/}
                                    <div className="additional-info">
                                    <ul>
                                        <li>
                                        <figure>Start Date</figure>
                                        <aside>25.06.2017 09:00</aside>
                                        </li>
                                        <li>
                                        <figure>Length</figure>
                                        <aside>2 months</aside>
                                        </li>
                                        <li>
                                        <figure>Bedrooms</figure>
                                        <aside>3</aside>
                                        </li>
                                    </ul>
                                    </div>
                                    {/*end addition-info*/}
                                    <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                                </div>
                                </div>
                                {/*end item*/}
                                <div className="item">
                                <div className="wrapper">
                                    <div className="image">
                                    <h3>
                                        <a href="/" className="tag category">Adventure</a>
                                        <a href="single-listing-1.html" className="title">Into The Wild</a>
                                        <span className="tag">Ad</span>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src={Image03} alt="" />
                                    </a>
                                    </div>
                                    {/*end image*/}
                                    <h4 className="location">
                                    <a href="/">Seattle, WA</a>
                                    </h4>
                                    <div className="price">$1,560</div>
                                    <div className="admin-controls">
                                    <a href="edit-ad.html">
                                        <i className="fa fa-pencil" />Edit
                                    </a>
                                    <a href="/" className="ad-hide">
                                        <i className="fa fa-eye-slash" />Hide
                                    </a>
                                    <a href="/" className="ad-remove">
                                        <i className="fa fa-trash" />Remove
                                    </a>
                                    </div>
                                    {/*end admin-controls*/}
                                    <div className="description">
                                    <p>Nam eget ullamcorper massa. Morbi fringilla lectus nec lorem tristique gravida</p>
                                    </div>
                                    {/*end description*/}
                                    <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                                </div>
                                </div>
                                {/*end item*/}
                                <div className="item">
                                <div className="wrapper">
                                    <div className="image">
                                    <h3>
                                        <a href="/" className="tag category">Real Estate</a>
                                        <a href="single-listing-1.html" className="title">Luxury Apartment</a>
                                        <span className="tag">Offer</span>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src={Image04} alt="" />
                                    </a>
                                    </div>
                                    {/*end image*/}
                                    <h4 className="location">
                                    <a href="/">Greeley, CO</a>
                                    </h4>
                                    <div className="price">$75,000</div>
                                    <div className="admin-controls">
                                    <a href="edit-ad.html">
                                        <i className="fa fa-pencil" />Edit
                                    </a>
                                    <a href="/" className="ad-hide">
                                        <i className="fa fa-eye-slash" />Hide
                                    </a>
                                    <a href="/" className="remove">
                                        <i className="fa fa-trash" />Remove
                                    </a>
                                    </div>
                                    {/*end admin-controls*/}
                                    <div className="description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                                    </div>
                                    {/*end description*/}
                                    <div className="additional-info">
                                    <ul>
                                        <li>
                                        <figure>Area</figure>
                                        <aside>368m<sup>2</sup></aside>
                                        </li>
                                        <li>
                                        <figure>Bathrooms</figure>
                                        <aside>2</aside>
                                        </li>
                                        <li>
                                        <figure>Bedrooms</figure>
                                        <aside>3</aside>
                                        </li>
                                        <li>
                                        <figure>Garage</figure>
                                        <aside>1</aside>
                                        </li>
                                    </ul>
                                    </div>
                                    {/*end addition-info*/}
                                    <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                                </div>
                                </div>
                                {/*end item*/}
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