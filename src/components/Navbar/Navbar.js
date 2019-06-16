import React, { Component } from "react";
import "../../assets/fonts/font-awesome.css";
import "../../assets/css/selectize.css";
import "../../assets/css/style.css";
import "../../assets/css/user.css";
import BackgroundIcons from "../../assets/img/hero-background-icons.jpg";
import Logo from "../../assets/img/logo.png";
import SecondaryNavigation from "../Navbar/SecondaryNavigation";
import NavItem1 from "./NavItem1";
import NavItem2 from "./NavItem2";
import NavItem3 from "./NavItem3";

class Navbar extends Component {
  render() {
    return (
      <div className="page home-page">
        <div className="hero-wrapper">
          <SecondaryNavigation />
          {/*============ Main Navigation ====================================================================*/}
          <div className="main-navigation">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                <a className="navbar-brand" href="/home">
                  <img src={Logo} alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="/navbar"
                  aria-controls="navbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                  {/*Main navigation list*/}
                  <ul className="navbar-nav">
                    <li className="nav-item active has-child">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                      <ul className="child">
                        <li className="nav-item">
                          <a href="index.html" className="nav-link">
                            Home 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="index-2.html" className="nav-link">
                            Home 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="index-3.html" className="nav-link">
                            Home 3
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="index-4.html" className="nav-link">
                            Home 4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <NavItem1 />
                    <NavItem2 />
                    <NavItem3 />
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/create-article"
                        className="btn btn-primary text-caps btn-rounded btn-framed"
                      >
                        Submit Ad
                      </a>
                    </li>
                  </ul>
                  {/*Main navigation list*/}
                </div>
                {/*end navbar-collapse*/}
              </nav>
              {/*end navbar*/}
            </div>
            {/*end container*/}
          </div>
          <div className="background" />
          <div className="background-image original-size">
            <img src={BackgroundIcons} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
