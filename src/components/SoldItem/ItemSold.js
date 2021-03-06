import React, { Component } from "react";

class ItemSold extends Component {
  render() {
    return (
      <div className="item item-sold">
        <div className="ribbon-diagonal">
          <div className="ribbon-diagonal__inner">
            <span>Sold</span>
          </div>
          {/*end ribbon-diagonal__inner*/}
        </div>
        {/*end ribbon-diagonal*/}
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
              <img src="assets/img/image-01.jpg" alt="" />
            </a>
          </div>
          {/*end image*/}
          <h4 className="location">
            <a href="/">Manhattan, NY</a>
          </h4>
          <div className="price">$80</div>
          <div className="meta">
            <figure>
              <i className="fa fa-calendar-o" />
              02.05.2017
            </figure>
            <figure>
              <a href="/">
                <i className="fa fa-user" />
                Jane Doe
              </a>
            </figure>
          </div>
          {/*end meta*/}
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

export default ItemSold;
