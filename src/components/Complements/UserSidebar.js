import React, { Component } from "react";
import ImageAuthor01 from "../assets/img/author-01.jpg";

class UserSidebar extends Component {
  render() {
    return (
      <div className="col-md-4">
        <aside className="sidebar">
          {/*Author*/}
          <section>
            <h2>Author</h2>
            <div className="box">
              <div className="author">
                <div className="author-image">
                  <div className="background-image">
                    <img src={ImageAuthor01} alt="" />
                  </div>
                </div>
                {/*end author-image*/}
                <div className="author-description">
                  <h3>Jane Doe</h3>
                  <div className="rating" data-rating={4} />
                  <a href="seller-detail-1.html" className="text-uppercase">
                    Show My Listings
                    <span className="appendix">(12)</span>
                  </a>
                </div>
                {/*end author-description*/}
              </div>
              <hr />
              <dl>
                <dt>Phone</dt>
                <dd>830-247-0930</dd>
                <dt>Email</dt>
                <dd>hijane@example.com</dd>
              </dl>
              {/*end author*/}
              <form className="form email">
                <div className="form-group">
                  <label htmlFor="name" className="col-form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
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
                  />
                </div>
                {/*end form-group*/}
                <div className="form-group">
                  <label htmlFor="message" className="col-form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Hi there! I am interested in your offer ID 53951. Please give me more details."
                    defaultValue={""}
                  />
                </div>
                {/*end form-group*/}
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
            {/*end box*/}
          </section>
          {/*End Author*/}
        </aside>
      </div>
    );
  }
}

export default UserSidebar;
