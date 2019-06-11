import React, { Component } from "react";

class PersonalSection extends Component {
  render() {
    return (
      <div>
        <h2>Personal Information</h2>
        <section>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="title" className="col-form-label">
                  Title
                </label>
                <select name="title" id="title" data-placeholder="Title">
                  <option value>Title</option>
                  <option value={1} defaultValue="true">
                    Mrs
                  </option>
                  <option value={2}>Mr</option>
                </select>
              </div>
              {/*end form-group*/}
            </div>
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="name" className="col-form-label required">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  defaultValue="Jane Doe"
                  required
                />
              </div>
              {/*end form-group*/}
            </div>
            {/*end col-md-8*/}
          </div>
          {/*end row*/}
          <div className="form-group">
            <label htmlFor="location" className="col-form-label required">
              Your Location
            </label>
            <input
              name="location"
              type="text"
              className="form-control"
              id="input-location2"
              placeholder="Your Location"
              defaultValue="Manhattan, NY"
              required
            />
          </div>
          {/*end form-group*/}
          <div className="form-group">
            <label htmlFor="about" className="col-form-label">
              More About You
            </label>
            <textarea
              name="about"
              id="about"
              className="form-control"
              rows={4}
              defaultValue={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
              }
            />
          </div>
          {/*end form-group*/}
        </section>
      </div>
    );
  }
}

export default PersonalSection;
