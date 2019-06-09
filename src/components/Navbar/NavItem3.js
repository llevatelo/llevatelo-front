import React, { Component } from 'react';

class NavItem3 extends Component {
    render() {
        return (
            <li className="nav-item has-child">
                <a className="nav-link" href="/">Extras</a>
                {/*1st level */}
                <ul className="child">
                    <li className="nav-item has-child">
                        <a href="/" className="nav-link">Grid Variants</a>
                        <ul className="child">
                            <li className="nav-item">
                                <a href="listing-grid-full-width.html" className="nav-link">4
                                Items</a>
                            </li>
                            <li className="nav-item">
                                <a href="listing-grid-3-items.html" className="nav-link">3 Items</a>
                            </li>
                            <li className="nav-item">
                                <a href="listing-grid-2-items.html" className="nav-link">2 Items</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item has-child">
                        <a href="/" className="nav-link">User Panel</a>
                        <ul className="child">
                            <li className="nav-item">
                                <a href="my-profile.html" className="nav-link">My Profile</a>
                            </li>
                            <li className="nav-item">
                                <a href="my-ads.html" className="nav-link">My Ads</a>
                            </li>
                            <li className="nav-item">
                                <a href="change-password.html" className="nav-link">Change
                                Password</a>
                            </li>
                            <li className="nav-item">
                                <a href="sign-in.html" className="nav-link">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a href="register.html" className="nav-link">Register</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="elements.html" className="nav-link">Elements</a>
                    </li>
                    <li className="nav-item">
                        <a href="typography.html" className="nav-link">Typography</a>
                    </li>
                    <li className="nav-item has-child">
                        <a href="/" className="nav-link">Nested Navigation</a>
                    {/*2nd level */}
                        <ul className="child">
                            <li className="nav-item">
                                <a href="/" className="nav-link">Level 2</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Level 2</a>
                            </li>
                            <li className="nav-item has-child">
                                <a href="/" className="nav-link">Level 2</a>
                            {/*3rd level */}
                                <ul className="child">
                                    <li className="nav-item has-child">
                                        <a href="/" className="nav-link">Level 3</a>
                                    {/*4th level */}
                                        <ul className="child">
                                            <li className="nav-item">
                                                <a href="/" className="nav-link">Level 4</a>
                                            </li>
                                            <li className="nav-item">
                                            <a href="/" className="nav-link">Level 4</a>
                                            </li>
                                            <li className="nav-item">
                                            <a href="/" className="nav-link">Level 4</a>
                                            </li>
                                        </ul>
                                    {/* end 4th level*/}
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="nav-link">Level 3</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="nav-link">Level 3</a>
                                    </li>
                                </ul>
                            {/*end 3rd level*/}
                            </li>
                        </ul>
                    {/* end 2nd level */}
                    </li>
                    <li className="nav-item">
                        <a href="image-header.html" className="nav-link">Image Header</a>
                    </li>
                    <li className="nav-item">
                        <a href="messaging.html" className="nav-link">Messages</a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default NavItem3;