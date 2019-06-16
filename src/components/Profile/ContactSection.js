import React, { Component } from "react";

class ContactSection extends Component {
  render() {
    return (
      <div>
        <section>
          <h2>Contact</h2>
          <div className="form-group">
            <label htmlFor="phone" className="col-form-label">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              className="form-control"
              id="phone"
              placeholder="Your Phone"
              defaultValue="312-238-3329"
            />
          </div>
          {/*end form-group*/}
          <div className="form-group">
            <label htmlFor="email" className="col-form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              defaultValue="jane.doe@example.com"
            />
          </div>
          {/*end form-group*/}
        </section>
        <section>
          <h2>Social</h2>
          <div className="form-group">
            <label htmlFor="twitter" className="col-form-label">
              Twitter
            </label>
            <input
              name="twitter"
              type="text"
              className="form-control"
              id="twitter"
              placeholder="http://"
              defaultValue="http://www.twitter.com/jane.doe"
            />
          </div>
          {/*end form-group*/}
          <div className="form-group">
            <label htmlFor="facebook" className="col-form-label">
              Facebook
            </label>
            <input
              name="facebook"
              type="text"
              className="form-control"
              id="facebook"
              placeholder="http://"
              defaultValue="http://www.facebook.com/jane.doe"
            />
          </div>
          {/*end form-group*/}
        </section>
        <section className="clearfix">
          <button type="submit" className="btn btn-primary float-right">
            Save Changes
          </button>
        </section>
      </div>
    );
  }
}

export default ContactSection;
