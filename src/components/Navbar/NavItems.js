import React, { Component } from "react";

class NavItems extends Component {
  render() {
    return (
      <div className="col-md-3">
        <nav className="nav flex-column side-nav">
          <a
            className={
              "nav-link icon " +
              (this.props.path === "Profile" ? " active" : "")
            }
            href="/profile"
          >
            <i className="fa fa-user" />
            My Profile
          </a>
          <a
            className={
              "nav-link icon " + (this.props.path === "Ads" ? " active" : "")
            }
            href="/my-ads"
          >
            <i className="fa fa-heart" />
            My Ads Listing
          </a>
          <a
            className={
              "nav-link icon " +
              (this.props.path === "Bookmarks" ? " active" : "")
            }
            href="/bookmarks"
          >
            <i className="fa fa-star" />
            Bookmarks
          </a>
          <a
            className={
              "nav-link icon " +
              (this.props.path === "ChangePassword" ? " active" : "")
            }
            href="/change-password"
          >
            <i className="fa fa-recycle" />
            Change Password
          </a>
          <a
            className={
              "nav-link icon " +
              (this.props.path === "SoldItems" ? " active" : "")
            }
            href="/sold-items"
          >
            <i className="fa fa-check" />
            Sold Items
          </a>
        </nav>
      </div>
    );
  }
}

export default NavItems;
