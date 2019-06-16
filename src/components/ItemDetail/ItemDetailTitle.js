import React, { Component } from "react";

class ItemDetailTitle extends Component {
  render() {
    return (
      <div className="page-title">
        <div className="container clearfix">
          <div className="float-left float-xs-none">
            <h1>
              Furniture For Sale
              <span className="tag">Offer</span>
            </h1>
            <h4 className="location">
              <a href="/">Manhattan, NY</a>
            </h4>
          </div>
          <div className="float-right float-xs-none price">
            <div className="number">${this.props.price}</div>
            <div className="id opacity-50">
              <strong>ID: </strong>3479
            </div>
          </div>
        </div>
        {/*end container*/}
      </div>
    );
  }
}

export default ItemDetailTitle;
