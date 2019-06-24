import React, { Component } from "react";
import BackgroundIcons from "../../assets/img/hero-background-icons.jpg";
import Select from 'react-select';

import "./styles.scss";


class SearchForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: [
        { value: 'Computers', label: 'Computers' },
        { value: 'Real Estate', label: 'Real Estate' },
        { value: 'Cars/Motorcycles', label: 'Cars and Motorcycles' },
      ]
    }
  }

  render() {

    const customControlStyles = {
      option: (provided, state) => ({
        ...provided,
      }),
      control: (base) => ({
        ...base,
        height: 55,
      })
    }

    return (
      <div className="hero-wrapper">
        <div className="page-title">
          <div className="container">
            <h1 className="opacity-40 center">
              <a href="/">Buy</a>, <a href="/">Sell</a> or
              <a href="/">Find</a>{" "} What You need
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
                    <input
                      name="keyword"
                      type="text"
                      className="form-control"
                      id="what"
                      placeholder="What are you looking for?"
                    />
                  </div>
                  {/*end form-group*/}
                </div>
                {/*end col-md-3*/}
                <div className="col-md-3 col-sm-3">
                  <div className="form-group">
                    <label htmlFor="input-location" className="col-form-label">Where? </label>
                    <input
                      name="location"
                      type="text"
                      className="form-control"
                      id="input-location"
                      placeholder="Enter Location"
                    />
                    <span
                      className="geo-location input-group-addon"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Find My Position"
                    >
                      <i className="fa fa-map-marker" />
                    </span>
                  </div>
                  {/*end form-group*/}
                </div>
                {/*end col-md-3*/}
                <div className="col-md-3 col-sm-3">
                  <div className="form-group">
                    <label htmlFor="category" className="col-form-label"> Category?</label>
                    <Select
                      className="selecx"
                      options={this.state.options}
                      styles={customControlStyles}
                    />
                  </div>
                  {/*end form-group*/}
                </div>
                {/*end col-md-3*/}
                <div className="col-md-3 col-sm-3">
                  <button type="submit" className="btn btn-primary width-100"> Search</button>
                </div>
                {/*end col-md-3*/}
              </div>
              {/*end form-row*/}
            </div>
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
