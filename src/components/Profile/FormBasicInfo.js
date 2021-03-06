import React, { Component } from "react";
import Select from 'react-select';

class FormBasicInfo extends Component {
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
      <section>
        <h2>Basic Information</h2>
        <div className="form-group" id="type">
          <label htmlFor="type" className="required">
            Type
          </label>
          <figure>
            <label className="framed">
              <input type="radio" name="type" defaultValue={1} required />
              Offer
            </label>
            <label className="framed">
              <input type="radio" name="type" defaultValue={2} required />
              Demand
            </label>
          </figure>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="title" className="col-form-label required">
                Title
              </label>
              <input
                name="title"
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                required
              />
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-8*/}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="submit-category" className="col-form-label">
                Category
              </label>
              <Select
                className="selecx"
                options={this.state.options}
                styles={customControlStyles}
              />
            </div>
            {/*end form-group*/}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="name" className="col-form-label required">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-4*/}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="email" className="col-form-label required">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-4*/}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="phone" className="col-form-label required">
                Your Phone
              </label>
              <input
                name="phone"
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone"
                required
              />
            </div>
            {/*end form-group*/}
          </div>
          {/*end col-md-4*/}
        </div>
      </section>
    );
  }
}

export default FormBasicInfo;
