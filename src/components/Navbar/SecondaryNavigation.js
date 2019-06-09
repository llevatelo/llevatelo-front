import React, { Component } from 'react';

class SecondaryNavigation extends Component {
    render() {
        return (
            <div className="secondary-navigation">
                <div className="container">
                    <ul className="left">
                        <li>
                            <span>
                            <i className="fa fa-phone" /> +1 123 456 789
                            </span>
                        </li>
                        </ul>
                        {/*end left*/}
                        <ul className="right">
                        <li>
                            <a href="my-ads.html">
                            <i className="fa fa-heart" />My Ads
                            </a>
                        </li>
                        <li>
                            <a href="sign-in.html">
                            <i className="fa fa-sign-in" />Sign In
                            </a>
                        </li>
                        <li>
                            <a href="register.html">
                            <i className="fa fa-pencil-square-o" />Register
                            </a>
                        </li>
                    </ul>
                    {/*end right*/}
                </div>
                {/*end container*/}
            </div>
        );
    }
}

export default SecondaryNavigation;