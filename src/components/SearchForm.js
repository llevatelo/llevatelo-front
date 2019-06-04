import React, { Component } from 'react';
import BackgroundIcons from './assets/img/hero-background-icons.jpg'

import './assets/bootstrap/css/bootstrap.css';
import './assets/fonts/font-awesome.css';
import './assets/css/selectize.css';
import './assets/css/style.css';
import './assets/css/user.css';

class SearchForm extends Component {
    render() {
        return (
            
                <div className="hero-wrapper">
                    {/*============ Page Title =========================================================================*/}
                    <div className="page-title">
                    <div className="container">
                        <h1 className="opacity-40 center">
                        <a href="/">Buy</a>, <a href="/">Sell</a> or <a href="/">Find</a> What You need
                        </h1>
                    </div>
                    {/*end container*/}
                    </div>
                    {/*============ End Page Title =====================================================================*/}
                    {/*============ Hero Form ==========================================================================*/}
                    <form className="hero-form form">
                    <div className="container">
                        {/*Main Form*/}
                        <div className="main-search-form">
                        <div className="form-row">
                            <div className="col-md-3 col-sm-3">
                            <div className="form-group">
                                <label htmlFor="what" className="col-form-label">What?</label>
                                <input name="keyword" type="text" className="form-control" id="what" placeholder="What are you looking for?" />
                            </div>
                            {/*end form-group*/}
                            </div>
                            {/*end col-md-3*/}
                            <div className="col-md-3 col-sm-3">
                            <div className="form-group">
                                <label htmlFor="input-location" className="col-form-label">Where?</label>
                                <input name="location" type="text" className="form-control" id="input-location" placeholder="Enter Location" />
                                <span className="geo-location input-group-addon" data-toggle="tooltip" data-placement="top" title="Find My Position"><i className="fa fa-map-marker" /></span>
                            </div>
                            {/*end form-group*/}
                            </div>
                            {/*end col-md-3*/}
                            <div className="col-md-3 col-sm-3">
                            <div className="form-group">
                                <label htmlFor="category" className="col-form-label">Category?</label>
                                <select className="selectize-input items full has-options has-items" name="category" id="category" data-placeholder="Select Category">
                                    <option value>Select Category</option>
                                    <option value={1}>Computers</option>
                                    <option value={2}>Real Estate</option>
                                    <option value={3}>Cars &amp; Motorcycles</option>
                                    <option value={4}>Furniture</option>
                                    <option value={5}>Pets &amp; Animals</option>
                                </select>
                            </div>
                            {/*end form-group*/}
                            </div>
                            {/*end col-md-3*/}
                            <div className="col-md-3 col-sm-3">
                            <button type="submit" className="btn btn-primary width-100">Search</button>
                            </div>
                            {/*end col-md-3*/}
                        </div>
                        {/*end form-row*/}
                        </div>
                        {/*end main-search-form*/}
                        {/*Alt=""ernative Form*/}
                        <div className="alternative-search-form">

                        <div className="collapse" id="collapseAlternativeSearchForm">
                            <div className="wrapper">
                            <div className="form-row">
                                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 d-xs-grid d-flex align-items-center justify-content-between">
                                <label>
                                    <input type="checkbox" name="new" />
                                    New
                                </label>
                                <label>
                                    <input type="checkbox" name="used" />
                                    Used
                                </label>
                                <label>
                                    <input type="checkbox" name="with_photo" />
                                    With Photo
                                </label>
                                <label>
                                    <input type="checkbox" name="featured" />
                                    Featured
                                </label>
                                </div>
                                {/*end col-xl-6*/}
                                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <div className="form-row">
                                    <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                        <input name="min_price" type="text" className="form-control small" id="min-price" placeholder="Minimal Price" />
                                        <span className="input-group-addon small">$</span>
                                    </div>
                                    {/*end form-group*/}
                                    </div>
                                    {/*end col-md-4*/}
                                    <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                        <input name="max_price" type="text" className="form-control small" id="max-price" placeholder="Maximal Price" />
                                        <span className="input-group-addon small">$</span>
                                    </div>
                                    {/*end form-group*/}
                                    </div>
                                    {/*end col-md-4*/}
                                    <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                        <select name="distance" id="distance" className="small" data-placeholder="Distance">
                                        <option value>Distance</option>
                                        <option value={1}>1km</option>
                                        <option value={2}>5km</option>
                                        <option value={3}>10km</option>
                                        <option value={4}>50km</option>
                                        <option value={5}>100km</option>
                                        </select>
                                    </div>
                                    {/*end form-group*/}
                                    </div>
                                    {/*end col-md-3*/}
                                </div>
                                {/*end form-row*/}
                                </div>
                                {/*end col-xl-6*/}
                            </div>
                            {/*end row*/}
                            </div>
                            {/*end wrapper*/}
                        </div>
                        {/*end collapse*/}
                        </div>
                        {/*end alt=""ernative-search-form*/}
                    </div>
                    {/*end container*/}
                    </form>
                    {/*============ End Hero Form ======================================================================*/}
                    <div className="background">
                    <div className="background-image original-size">
                        <img src={BackgroundIcons} alt="" />
                    </div>
                    {/*end background-image*/}
                    </div>
                    {/*end background*/}
                </div>
            
        );
    }
}

export default SearchForm;