import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="page sub-page">
        <section className="content">
          <section className="block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                  <form className="form clearfix">
                    <div className="form-group">
                      <label for="name" className="col-form-label required">Your Name</label>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required />
                    </div>

                    <div className="form-group">
                      <label for="email" className="col-form-label required">Email</label>
                      <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required />
                    </div>

                    <div className="form-group">
                      <label for="password" className="col-form-label required">Password</label>
                      <input name="password" type="password" className="form-control" id="password" placeholder="Password" required />
                    </div>

                    <div className="form-group">
                      <label for="repeat_password" className="col-form-label required">Repeat Password</label>
                      <input name="repeat_password" type="password" className="form-control" id="repeat_password" placeholder="Repeat Password" required />
                    </div>

                    <div class="d-flex justify-content-between align-items-baseline">
                      <label>
                        <input type="checkbox" name="newsletter" value="1"/>
                        Receive Newsletter
                      </label>
                      <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                  </form>
                  <hr/>
                  <p>By clicking "Register" button, you agree with our <a href="#" className="link">Terms & Conditions.</a></p>
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
