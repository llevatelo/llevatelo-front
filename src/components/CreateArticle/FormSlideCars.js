import React, { Component } from "react";

class FormSlideCars extends Component {
  render() {
    return (
      <div className="form-slide" id="cars_motorcycles">
        <h3>Cars &amp; Motorcycles</h3>
        <figure className="category-icon">
          <img src="assets/icons/car.png" alt="" />
        </figure>
        {/*end category-icon*/}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label
                htmlFor="cars_motorcycles___type"
                className="col-form-label"
              >
                Vehicle Type
              </label>
              <select
                name="cars_motorcycles___type"
                id="cars_motorcycles___type"
                data-placeholder="Vehicle Type"
              >
                <option value>Vehicle Type</option>
                <option value={1}>Car</option>
                <option value={2}>Motorcycle</option>
                <option value={3}>Truck</option>
              </select>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-6*/}
          <div className="col-md-6">
            <div className="form-group">
              <label
                htmlFor="cars_motorcycles___status"
                className="col-form-label"
              >
                Status
              </label>
              <select
                name="cars_motorcycles___status"
                id="cars_motorcycles___status"
                data-placeholder="Status"
              >
                <option value>Status</option>
                <option value={1}>New</option>
                <option value={2}>Used</option>
              </select>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-6*/}
        </div>
        {/*end row*/}
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label
                htmlFor="cars_motorcycles___brand"
                className="col-form-label"
              >
                Vehicle Type
              </label>
              <select
                name="cars_motorcycles___brand"
                id="cars_motorcycles___brand"
                data-placeholder="Brand"
              >
                <option value>Brand</option>
                <option value={1}>Audi</option>
                <option value={2}>BWM</option>
                <option value={3}>GMC</option>
                <option value={4}>Ford</option>
                <option value={5}>Toyota</option>
              </select>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-4*/}
          <div className="col-md-4">
            <div className="form-group">
              <label
                htmlFor="cars_motorcycles___model"
                className="col-form-label"
              >
                Model
              </label>
              <select
                name="cars_motorcycles___model"
                id="cars_motorcycles___model"
                data-placeholder="Model"
              >
                <option value>Model</option>
                <option value={1}>Focus</option>
                <option value={2}>Ranger</option>
                <option value={3}>Mustang</option>
                <option value={4}>Edge</option>
              </select>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-4*/}
          <div className="col-md-4">
            <div className="form-group">
              <label
                htmlFor="cars_motorcycles___year"
                className="col-form-label"
              >
                Year
              </label>
              <input
                name="cars_motorcycles___year"
                type="text"
                className="form-control"
                id="cars_motorcycles___year"
              />
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-4*/}
        </div>
        {/*end row*/}
      </div>
    );
  }
}

export default FormSlideCars;
