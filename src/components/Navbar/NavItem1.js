import React, { Component } from 'react';

class NavItem1 extends Component {
    render() {
        return (
            <li className="nav-item has-child">
                <a className="nav-link" href="/">Listing</a>
                {/* 1st level */}
                <ul className="child">
                    <li className="nav-item has-child">
                    <a href="/" className="nav-link">Grid</a>
                    {/* 2nd level */}
                    <ul className="child">
                        <li className="nav-item">
                            <a href="listing-grid-full-width.html" className="nav-link">Full Width</a>
                        </li>
                        <li className="nav-item">
                            <a href="listing-grid-sidebar.html" className="nav-link">With Sidebar</a>
                        </li>
                            <li className="nav-item">
                        <a href="listing-grid-compact-sidebar.html" className="nav-link">Compact With Sidebar</a>
                        </li>
                        <li className="nav-item">
                            <a href="listing-grid-compact-full-width.html" className="nav-link">Compact Full Width</a>
                        </li>
                    </ul>
                    {/* end 2nd level */}
                    </li>
                    <li className="nav-item has-child">
                        <a href="/" className="nav-link">List</a>
                    {/* 2nd level */}
                        <ul className="child">
                            <li className="nav-item">
                            <a href="listing-list-full-width.html" className="nav-link">Full Width</a>
                            </li>
                            <li className="nav-item">
                            <a href="listing-list-sidebar.html" className="nav-link">With Sidebar</a>
                            </li>
                            <li className="nav-item">
                            <a href="listing-list-compact-sidebar.html" className="nav-link">Compact With Sidebar</a>
                            </li>
                            <li className="nav-item">
                            <a href="listing-list-compact-full-width.html" className="nav-link">Compact Full Width</a>
                            </li>
                        </ul>
                    {/* end 2nd level */}
                    </li>
                    <li className="nav-item has-child">
                        <a href="/" className="nav-link">Masonry</a>
                        {/* 2nd level */}
                        <ul className="child">
                            <li className="nav-item">
                            <a href="listing-masonry-full-width.html" className="nav-link">Full Width</a>
                            </li>
                            <li className="nav-item">
                            <a href="listing-masonry-sidebar.html" className="nav-link">With Sidebar</a>
                            </li>
                        </ul>
                    {/* end 2nd level */}
                    </li>
                    <li className="nav-item has-child">
                        <a href="/" className="nav-link">Single</a>
                        {/* 2nd level */}
                        <ul className="child">
                            <li className="nav-item">
                            <a href="/details" className="nav-link">Single 1</a>
                            </li>
                            <li className="nav-item">
                            <a href="single-listing-2.html" className="nav-link">Single 2</a>
                            </li>
                            <li className="nav-item">
                            <a href="single-listing-3.html" className="nav-link">Single 3</a>
                            </li>
                        </ul>
                    {/* end 2nd level */}
                    </li>
                </ul>
                {/* end 1st level */}
            </li>
        );
    }
}

export default NavItem1;