import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="page sub-page">
        <section className="content">
        <section className="block">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <form className="form clearfix">
                  <div className="form-group">
                    <label for="email" className="col-form-label required">Email</label>
                    <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <label for="password" className="col-form-label required">Password</label>
                    <input name="password" type="password" className="form-control" id="password" placeholder="Password" required />
                  </div>
                  <div className="d-flex justify-content-between align-items-baseline">
                    <label>
                      <input type="checkbox" name="remember" value="1" />
                      Remember Me
                    </label>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                  </div>
                </form>
                <hr/>
                <p>Troubles with signing? <a href="#" className="link">Click here.</a></p>
              </div>
            </div>
          </div>
        </section>
      </section>
      </div>
    )
  }
}

export default Content;
