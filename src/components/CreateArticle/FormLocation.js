import React, { Component } from "react";

class FormLocation extends Component {
  render() {
    return (
      <section>
        <h2>Location</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="city" className="col-form-label required">
                City
              </label>
              <select
                name="city"
                id="city"
                data-placeholder="Select City"
                required
              >
                <option value>City</option>
                <option value={1}>London</option>
                <option value={2}>New York</option>
                <option value={3}>Paris</option>
                <option value={4}>Moscow</option>
              </select>
            </div>
            {/*end form-group*/}
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="district" className="col-form-label required">
                District
              </label>
              <select
                name="district"
                id="district"
                data-placeholder="Select District"
                required
              >
                <option value>District</option>
                <option value={1}>Manhattan</option>
                <option value={2}>Brooklyn</option>
                <option value={3}>Queens</option>
                <option value={4}>The Bronx</option>
                <option value={5}>Staten Island</option>
              </select>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-6*/}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="street" className="col-form-label">
                Street
              </label>
              <input
                name="street"
                type="text"
                className="form-control"
                id="street"
              />
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-6*/}
        </div>
        {/*end row*/}
        <div className="form-group">
          <label htmlFor="input-location" className="col-form-label">
            Exact Location
          </label>
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
        <label>Map</label>
        <div className="map height-400px" id="map-submit" />
        <input
          name="latitude"
          type="text"
          className="form-control"
          id="latitude"
          hidden
        />
        <input
          name="longitude"
          type="text"
          className="form-control"
          id="longitude"
          hidden
        />
      </section>
    );
  }
}

export default FormLocation;
