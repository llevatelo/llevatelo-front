import React, { Component } from 'react';

class NavItem2 extends Component {
    render() {
        return (
            <li className="nav-item has-child">
                <a className="nav-link" href="/">Pages</a>
                {/* 2nd level */}
                <ul className="child">
                    <li className="nav-item">
                    <a href="sellers.html" className="nav-link">Sellers</a>
                    </li>
                    <li className="nav-item has-child">
                    <a href="/" className="nav-link">Seller Detail</a>
                    {/* 3rd level */}
                    <ul className="child">
                        <li className="nav-item">
                        <a href="seller-detail-1.html" className="nav-link">Seller Detail
                            1</a>
                        </li>
                        <li className="nav-item">
                        <a href="seller-detail-2.html" className="nav-link">Seller Detail
                            2</a>
                        </li>
                    </ul>
                    {/* end 3rd level */}
                    </li>
                    <li className="nav-item">
                    <a href="blog.html" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                    <a href="blog-post.html" className="nav-link">Blog Post</a>
                    </li>
                    <li className="nav-item">
                    <a href="submit.html" className="nav-link">Submit Ad</a>
                    </li>
                    <li className="nav-item">
                    <a href="pricing.html" className="nav-link">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a href="faq.html" className="nav-link">FAQ</a>
                    </li>
                </ul>
                {/* end 2nd level */}
            </li>
        );
    }
}

export default NavItem2;