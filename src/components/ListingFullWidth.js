import React, { Component } from 'react';
import './assets/bootstrap/css/bootstrap.css';
import './assets/fonts/font-awesome.css';
import './assets/css/selectize.css';
import './assets/css/style.css';
import './assets/css/user.css';

class ListingFullWidth extends Component {
    render() {
        return (
            <div className="page sub-page">
                <section className="content">
                <section className="block">
                    <div className="container">
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
                    <div className="items list grid-xl-4-items grid-lg-3-items grid-md-2-items">
                        <div className="item">
                        <div className="ribbon-diagonal">
                            <div className="ribbon-diagonal__inner">
                            <span>Sold</span>
                            </div>
                        </div>
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
                                <img src="assets/img/image-01.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Manhattan, NY</a>
                            </h4>
                            <div className="price">$80</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />02.05.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Jane Doe
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
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
                                <img src="assets/img/image-02.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Nashville, TN</a>
                            </h4>
                            <div className="price">$125</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />28.04.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Peter Browner
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
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
                                <img src="assets/img/image-03.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Seattle, WA</a>
                            </h4>
                            <div className="price">$1,560</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />21.04.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Peak Agency
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
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
                                <img src="assets/img/image-04.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Greeley, CO</a>
                            </h4>
                            <div className="price">$75,000</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />13.03.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Hills Estate
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
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
                        <div className="item">
                        <div className="wrapper">
                            <div className="image">
                            <h3>
                                <a href="/" className="tag category">Architecture</a>
                                <a href="single-listing-1.html" className="title">We'll Redesign Your Apartment</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-05.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Greeley, CO</a>
                            </h4>
                            <div className="price">
                            <span className="appendix">From</span>
                            $200
                            </div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />13.03.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />XL Designers
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
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
                            </ul>
                            </div>
                            {/*end addition-info*/}
                            <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                        </div>
                        </div>
                        {/*end item*/}
                        <div className="item">
                        <div className="ribbon-featured">Featured</div>
                        {/*end ribbon*/}
                        <div className="wrapper">
                            <div className="image">
                            <h3>
                                <a href="/" className="tag category">Jobs</a>
                                <a href="single-listing-1.html" className="title">Seeking for a Job</a>
                                <span className="tag">Demand</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-06.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Delavan, IL</a>
                            </h4>
                            <div className="price">$1,200</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />10.03.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Aurelio Thomas
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Degree</figure>
                                <aside>Bachelor’s</aside>
                                </li>
                                <li>
                                <figure>Category</figure>
                                <aside>Art &amp; Design</aside>
                                </li>
                                <li>
                                <figure>Experience</figure>
                                <aside>5 years</aside>
                                </li>
                                <li>
                                <figure>Language</figure>
                                <aside>English, German</aside>
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
                                <a href="/" className="tag category">Pets &amp; Animals</a>
                                <a href="single-listing-1.html" className="title">Baby Cats</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-07.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Detroit, MI</a>
                            </h4>
                            <div className="price">
                            <span className="appendix">From</span>
                            $80
                            </div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />23.02.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Detroit Pet Center
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Pellentesque ullamcorper justo quis bibendum
                                consequat. Integer id euismod lacus, facilisis faucibus urna.
                            </p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Age</figure>
                                <aside>2 weeks</aside>
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
                                <a href="/" className="tag category">Mobiles</a>
                                <a href="single-listing-1.html" className="title">Used Smartphone</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-08.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">West Roxbury, MA</a>
                            </h4>
                            <div className="price">$300</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />28.02.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Gloria A. Crawford
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Vestibulum congue at justo semper dignissim. Pellentesque ullamcorper justo quis bibendum
                                consequat. Integer id euismod lacus, facilisis faucibus urna.
                            </p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Status</figure>
                                <aside>Used</aside>
                                </li>
                                <li>
                                <figure>Brand</figure>
                                <aside>Samsung</aside>
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
                                <a href="/" className="tag category">Cars</a>
                                <a href="single-listing-1.html" className="title">Offroad Car</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-09.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Nehalem, OR</a>
                            </h4>
                            <div className="price">$30,000</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />14.01.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Leonardo
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Nam eget imperdiet massa. Cras dolor nulla, tristique eu nisl ut, venenatis volutpat massa.
                                Integer imperdiet finibus ipsum vitae scelerisque.
                            </p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Brand</figure>
                                <aside>Jeep</aside>
                                </li>
                                <li>
                                <figure>Engine</figure>
                                <aside>Diesel</aside>
                                </li>
                                <li>
                                <figure>Mileage</figure>
                                <aside>28,630</aside>
                                </li>
                            </ul>
                            </div>
                            {/*end addition-info*/}
                            <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                        </div>
                        </div>
                        {/*end item*/}
                        <a href="submit.html" className="item call-to-action">
                        <div className="wrapper">
                            <div className="title">
                            <i className="fa fa-plus-square-o" />
                            Submit Your Ad
                            </div>
                        </div>
                        </a>
                        {/*end item*/}
                        <div className="item">
                        <div className="wrapper">
                            <div className="image">
                            <h3>
                                <a href="/" className="tag category">Clothing</a>
                                <a href="single-listing-1.html" className="title">High Boots</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-10.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Raleigh, NC</a>
                            </h4>
                            <div className="price">$67</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />05.01.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Bobby
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Nam pulvinar mollis tortor, eu lobortis mauris luctus non. Integer lobortis sapien enim,
                                ut imperdiet leo faucibus id. Fusce tincidunt nunc elit, at varius erat rutrum vitae.
                            </p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Status</figure>
                                <aside>Used</aside>
                                </li>
                                <li>
                                <figure>Material</figure>
                                <aside>Genuine Leather</aside>
                                </li>
                                <li>
                                <figure>Size</figure>
                                <aside>10</aside>
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
                                <a href="/" className="tag category">Books &amp; Magazines</a>
                                <a href="single-listing-1.html" className="title">Will Buy "Behind the Sea" Book</a>
                                <span className="tag">Demand</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-11.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Long Beach, CA</a>
                            </h4>
                            <div className="price">$30</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />02.01.2017
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Patty McAlexander
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Mauris nisi ligula, pulvinar eu commodo eu, semper id quam. In vitae purus bibendum,
                                mattis ex nec, eleifend diam. Cras at vehicula metus. Sed elementum lectus ut aliquet vehicula.
                            </p>
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
                                <a href="/" className="tag category">Cameras</a>
                                <a href="single-listing-1.html" className="title">Retro Camera</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-12.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Bethany, WV</a>
                            </h4>
                            <div className="price">$120</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />20.12.2016
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Paula Nelson
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>In vitae purus bibendum, mattis ex nec, eleifend diam. Cras at vehicula metus.
                                Sed elementum lectus ut aliquet vehicula.
                            </p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Brand</figure>
                                <aside>Nikon</aside>
                                </li>
                                <li>
                                <figure>Model</figure>
                                <aside>F 35mm SLR </aside>
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
                                <a href="/" className="tag category">Food</a>
                                <a href="single-listing-1.html" className="title">Fresh Bio Vegetables</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-13.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Grand Rapids, MI</a>
                            </h4>
                            <div className="price">
                            <span className="appendix">From</span>
                            $120
                            </div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />20.12.2016
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Paula Nelson
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>In vitae purus bibendum, mattis ex nec, eleifend diam. Cras at vehicula metus.
                                Sed elementum lectus ut aliquet vehicula.
                            </p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Brand</figure>
                                <aside>Nikon</aside>
                                </li>
                                <li>
                                <figure>Model</figure>
                                <aside>F 35mm SLR </aside>
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
                                <a href="/" className="tag category">Restaurants</a>
                                <a href="single-listing-1.html" className="title">XL Baron Burger</a>
                                <span className="tag">Ad</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-14.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Burbank, CA</a>
                            </h4>
                            <div className="price">$120</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />18.12.2016
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Burger Barons
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Vestibulum sodales turpis eget venenatis iaculis. Nam pulvinar mollis tortor, eu
                                lobortis mauris luctus non. Integer lobortis sapien enim, ut imperdiet leo faucibus id.
                            </p>
                            </div>
                            {/*end description*/}
                            <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                        </div>
                        </div>
                        {/*end item*/}
                        <div className="item">
                        <div className="ribbon-featured">Featured</div>
                        {/*end ribbon*/}
                        <div className="wrapper">
                            <div className="image">
                            <h3>
                                <a href="/" className="tag category">Photo &amp; Camera</a>
                                <a href="single-listing-1.html" className="title">Professional Photo Shooting</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-15.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Cambridge, MA</a>
                            </h4>
                            <div className="price">
                            <span className="appendix">From</span>
                            $350
                            </div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />12.11.2016
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Kate's Photo
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Morbi lectus massa, consequat blandit eleifend et, venenatis ut orci.
                                Vestibulum finibus metus at lacus egestas pulvinar.
                            </p>
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
                                <a href="/" className="tag category">Sport</a>
                                <a href="single-listing-1.html" className="title">Urban Bike</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-16.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Freeport, TX</a>
                            </h4>
                            <div className="price">$140</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />06.11.2016
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Laura
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Morbi egestas elit et orci interdum, ac tincidunt diam feugiat. Aliquam erat volutpat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Brand</figure>
                                <aside>Trek</aside>
                                </li>
                                <li>
                                <figure>Size</figure>
                                <aside>Large</aside>
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
                                <a href="/" className="tag category">Real Estate</a>
                                <a href="single-listing-1.html" className="title">Luxury Villa</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-17.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">St Joe, IN </a>
                            </h4>
                            <div className="price">$360,000</div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />17.10.2016
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Homeland Estate
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>nteger imperdiet finibus ipsum vitae scelerisque. Vestibulum sodales turpis eget venenatis iaculis.
                                Nam pulvinar mollis tortor, eu lobortis mauris luctus non. Integer lobortis sapien enim
                            </p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Area</figure>
                                <aside>5,620m<sup>2</sup></aside>
                                </li>
                                <li>
                                <figure>Size</figure>
                                <aside>Large</aside>
                                </li>
                                <li>
                                <figure>Bedrooms</figure>
                                <aside>4</aside>
                                </li>
                                <li>
                                <figure>Bathrooms</figure>
                                <aside>3</aside>
                                </li>
                                <li>
                                <figure>Garages</figure>
                                <aside>4</aside>
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
                                <a href="/" className="tag category">Cars</a>
                                <a href="single-listing-1.html" className="title">Car Wheels</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-18.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Bryan, TX</a>
                            </h4>
                            <div className="price">
                            <span className="appendix">From</span>
                            $140
                            </div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />12.10.2016
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />George R. Mund
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Duis tempor velit vel lectus viverra, et finibus justo semper. Morbi egestas elit et
                                orci interdum, ac tincidunt diam feugiat. Aliquam erat volutpat. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit
                            </p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Size</figure>
                                <aside>From 17"</aside>
                                </li>
                                <li>
                                <figure>Material</figure>
                                <aside>Alloy</aside>
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
                                <a href="/" className="tag category">Computer</a>
                                <a href="single-listing-1.html" className="title">Will Buy MacBook Pro</a>
                                <span className="tag">Demand</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="assets/img/image-19.jpg" alt="" />
                            </a>
                            </div>
                            {/*end image*/}
                            <h4 className="location">
                            <a href="/">Elmsford, NJ</a>
                            </h4>
                            <div className="price">
                            <span className="appendix">Max</span>
                            $2,500
                            </div>
                            <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />10.10.2016
                            </figure>
                            <figure>
                                <a href="/">
                                <i className="fa fa-user" />Timothy
                                </a>
                            </figure>
                            </div>
                            {/*end meta*/}
                            <div className="description">
                            <p>Quisque in tincidunt quam, quis blandit orci. Proin semper leo mi, efficitur lacinia nunc blandit ac.
                                Vestibulum congue at justo semper dignissim.
                            </p>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                            <ul>
                                <li>
                                <figure>Screen Size</figure>
                                <aside>17"</aside>
                                </li>
                            </ul>
                            </div>
                            {/*end addition-info*/}
                            <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                        </div>
                        </div>
                        {/*end item*/}
                    </div>
                    {/*============ End Items ======================================================================*/}
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
                            <a className="page-link" href="/">1</a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="/">2</a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="/">3</a>
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
                    {/*end page-pagination*/}
                    </div>
                    {/*end container*/}
                </section>
                {/*end block*/}
                </section>
            </div>
        );
    }
}

export default ListingFullWidth;