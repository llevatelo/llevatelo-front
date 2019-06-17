import React, { Component } from "react";
import Image01 from "../../assets/img/image-01.jpg";

class AdsItemFeatured extends Component {
  render() {
    return (
      <div className="item">
        {this.props.featured ? (
          <div className="ribbon-featured">Featured</div>
        ) : (
          ""
        )}

        {/*end ribbon*/}
        <div className="wrapper">
          <div className="image">
            <h3>
              <a href="/" className="tag category">
                Home &amp; Decor
              </a>
              <a href="/details" className="title">
                Furniture for sale
              </a>
              <span className="tag">Offer</span>
            </h3>
            <a href="/details" className="image-wrapper background-image">
              <img src={Image01} alt="" />
            </a>
          </div>
          {/*end image*/}
          <h4 className="location">
            <a href="/">Manhattan, NY</a>
          </h4>
          <div className="price">$80</div>
          <div className="admin-controls">
            <a href="edit-ad.html">
              <i className="fa fa-pencil" />
              Edit
            </a>
            <a href="/" className="ad-hide">
              <i className="fa fa-eye-slash" />
              Hide
            </a>
            <a href="/" className="ad-remove">
              <i className="fa fa-trash" />
              Remove
            </a>
          </div>
          {/*end admin-controls*/}
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              venenatis lobortis
            </p>
          </div>
          {/*end description*/}
          <a href="/details" className="detail text-caps underline">
            Detail
          </a>
        </div>
      </div>
    );
  }
}

export default AdsItemFeatured;
