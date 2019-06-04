import React, { Component } from 'react';


class BookmarkContent extends Component {
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
                                <a className="nav-link active icon" href="/bookmarks">
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
                            <div className="items list compact grid-xl-3-items grid-lg-3-items grid-md-2-items">
                                <div className="item">
                                <div className="ribbon-vertical">
                                    <i className="fa fa-star" />
                                </div>
                                {/*end ribbon-vertical*/}
                                <div className="wrapper">
                                    <div className="image">
                                    <h3>
                                        <a href="/" className="tag category">Home &amp; Decor</a>
                                        <a href="single-listing-1.html" className="title">Furniture for sale</a>
                                        <span className="tag">Offer</span>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src="./assets/img/image-01.jpg" alt="" />
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
                                <div className="ribbon-vertical">
                                    <i className="fa fa-star" />
                                </div>
                                {/*end ribbon-vertical*/}
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
                                <div className="ribbon-vertical">
                                    <i className="fa fa-star" />
                                </div>
                                {/*end ribbon-vertical*/}
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
                                <div className="ribbon-vertical">
                                    <i className="fa fa-star" />
                                </div>
                                {/*end ribbon-vertical*/}
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
                                <div className="ribbon-vertical">
                                    <i className="fa fa-star" />
                                </div>
                                {/*end ribbon-vertical*/}
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
                                <div className="ribbon-vertical">
                                    <i className="fa fa-star" />
                                </div>
                                {/*end ribbon-vertical*/}
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
                                <div className="ribbon-vertical">
                                    <i className="fa fa-star" />
                                </div>
                                {/*end ribbon-vertical*/}
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
                            {/*end items*/}
                            {/*============ End Items ==============================================================*/}
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

export default BookmarkContent;