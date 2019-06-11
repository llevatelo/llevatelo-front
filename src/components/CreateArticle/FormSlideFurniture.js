import React, { Component } from "react";

class FormSlideFurniture extends Component {
  render() {
    return (
      <div className="form-slide" id="furniture">
        <h3>Furniture</h3>
        <figure className="category-icon">
          <img src="assets/icons/furniture.png" alt="" />
        </figure>
        {/*end category-icon*/}
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="furniture___type" className="col-form-label">
                Type
              </label>
              <select
                name="furniture___type"
                id="furniture___type"
                data-placeholder="Type"
              >
                <option value>Type</option>
                <option value={1}>Bed</option>
                <option value={2}>Wardrobe</option>
                <option value={3}>Table</option>
              </select>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-4*/}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="furniture___status" className="col-form-label">
                Status
              </label>
              <select
                name="furniture___status"
                id="furniture___status"
                data-placeholder="Status"
              >
                <option value>Status</option>
                <option value={1}>New</option>
                <option value={2}>Used</option>
              </select>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-4*/}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="furniture___material" className="col-form-label">
                Material
              </label>
              <select
                name="furniture___material"
                id="furniture___material"
                data-placeholder="Material"
              >
                <option value>Material</option>
                <option value={1}>Wood</option>
                <option value={2}>Leather</option>
                <option value={2}>Metal</option>
              </select>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-4*/}
        </div>
        {/*end row*/}
        <h4>Size &amp; Weigth</h4>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="furniture___length" className="col-form-label">
                Length
              </label>
              <input
                name="furniture___length"
                type="text"
                className="form-control"
                id="furniture___length"
              />
              <span className="input-group-addon">mm</span>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-3*/}
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="furniture___width" className="col-form-label">
                Width
              </label>
              <input
                name="furniture___width"
                type="text"
                className="form-control"
                id="furniture___width"
              />
              <span className="input-group-addon">mm</span>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-3*/}
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="furniture___height" className="col-form-label">
                Height
              </label>
              <input
                name="furniture___height"
                type="text"
                className="form-control"
                id="furniture___height"
              />
              <span className="input-group-addon">mm</span>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-3*/}
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="furniture___weight" className="col-form-label">
                Weight
              </label>
              <input
                name="furniture___weight"
                type="text"
                className="form-control"
                id="furniture___weight"
              />
              <span className="input-group-addon">kg</span>
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-3*/}
        </div>
        {/*end row*/}
      </div>
    );
  }
}

export default FormSlideFurniture;
