import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="wrapper">
                    <div className="image">
                        <h3>
                            <a href="/" className="tag category">Education</a>
                            <a href="/details" className="title">Creative Course</a>
                            <span className="tag">Offer</span>
                        </h3>
                        <a href="/details" className="image-wrapper background-image">
                            <img src="http://themestarz.net/html/craigs/assets/img/image-20.jpg" alt="" />
                        </a>
                    </div>
                    {/*end image*/}
                    <h4 className="location">
                        <a href="/">{this.props.city}</a>
                    </h4>
                    <div className="price">$125</div>
                        <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o" />28.04.2017
                            </figure>
                            <figure>
                            <a href="/">
                                <i className="fa fa-user" />Peter Browner
                            </a>
                        </figure>
                        </div>
                    {/*end meta*/}
                    <div className="description">
                        <p>Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus, eget suscipit tellus tincidunt sit amet. </p>
                    </div>
                    {/*end description*/}
                    <div className="additional-info">
                        <ul>
                            <li>
                            <figure>Start Date</figure>
                            <aside>25.06.2017 09:00</aside>
                            </li>
                            <li>
                            <figure>Length</figure>
                            <aside>2 months</aside>
                            </li>
                            <li>
                            <figure>Bedrooms</figure>
                            <aside>3</aside>
                            </li>
                        </ul>
                    </div>
                    {/*end addition-info*/}
                    <a href="/details" className="detail text-caps underline">Detail</a>
                </div>
            </div>
        );
    }
}

export default Item;