import React, { Component } from 'react';
import Logo from '../assets/img/logo.png';
import FooterImage from '../assets/img/footer-background-icons.jpg'



class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <a href="/" className="brand">
                                    <img src={Logo} alt="" />
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet
                                    fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                                </p>
                            </div>
                            {/*end col-md-5*/}
                            <div className="col-md-3">
                                <h2>Navigation</h2>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <nav>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="/home">Home</a>
                                                </li>
                                                <li>
                                                    <a href="/home">Listing</a>
                                                </li>
                                                <li>
                                                    <a href="/home">Pages</a>
                                                </li>
                                                <li>
                                                    <a href="/">Extras</a>
                                                </li>
                                                <li>
                                                    <a href="/">Contact</a>
                                                </li>
                                                <li>
                                                    <a href="/create-article">Submit Ad</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <nav>
                                            <ul className="list-unstyled">
                                            <li>
                                                <a href="/">My Ads</a>
                                            </li>
                                            <li>
                                                <a href="/">Sign In</a>
                                            </li>
                                            <li>
                                                <a href="/">Register</a>
                                            </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/*end col-md-3*/}
                            <div className="col-md-4">
                                <h2>Contact</h2>
                                <address>
                                    <figure>
                                    124 Abia Martin Drive<br />
                                    New York, NY 10011
                                    </figure>
                                    <br />
                                    <strong>Email:</strong> <a href="/">hello@example.com</a>
                                    <br />
                                    <strong>Skype: </strong> Craigs
                                    <br />
                                    <br />
                                    <a href="contact.html" className="btn btn-primary text-caps btn-framed">Contact Us</a>
                                </address>
                            </div>
                            {/*end col-md-4*/}
                        </div>
                    {/*end row*/}
                    </div>
                    <div className="background">
                        <div className="background-image original-size">
                            <img src={FooterImage} alt="" />
                        </div>
                    {/*end background-image*/}
                    </div>  
                    {/*end background*/}
                </div>
            </footer>
        );
    }
}

export default Footer;