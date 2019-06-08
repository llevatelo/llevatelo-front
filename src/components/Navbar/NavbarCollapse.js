import React, { Component } from 'react';
import Logo from '../assets/img/logo.png';
import NavItem1 from './NavItem1';
import NavItem2 from './NavItem2';
import NavItem3 from './NavItem3';


class NavbarCollapse extends Component {
    render() {
        return (
            <div className="main-navigation">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                    <a className="navbar-brand" href="/home">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        {/*Main navigation list*/}
                        <ul className="navbar-nav">
                        <li className="nav-item active has-child">
                            <a className="nav-link" href="/">Home</a>
                            <ul className="child">
                            <li className="nav-item">
                                <a href="index.html" className="nav-link">Home 1</a>
                            </li>
                            <li className="nav-item">
                                <a href="index-2.html" className="nav-link">Home 2</a>
                            </li>
                            <li className="nav-item">
                                <a href="index-3.html" className="nav-link">Home 3</a>
                            </li>
                            <li className="nav-item">
                                <a href="index-4.html" className="nav-link">Home 4</a>
                            </li>
                            </ul>
                        </li>
                        <NavItem1 />
                        <NavItem2 />
                        <NavItem3 />
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/create-article" className="btn btn-primary text-caps btn-rounded btn-framed">Submit Ad</a>
                        </li>
                        </ul>
                        {/*Main navigation list*/}
                    </div>
                    {/*end navbar-collapse*/}
                    <a href="#collapseMainSearchForm" className="main-search-form-toggle" data-toggle="collapse" aria-expanded="false" aria-controls="collapseMainSearchForm">
                        <i className="fa fa-search" />
                        <i className="fa fa-close" />
                    </a>
                    {/*end main-search-form-toggle*/}
                    </nav>
                    {/*end navbar*/}
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/">Library</a></li>
                    <li className="breadcrumb-item active">Data</li>
                    </ol>
                    {/*end breadcrumb*/}
                </div>
                {/*end container*/}
            </div>
            
        );
    }
}

export default NavbarCollapse;