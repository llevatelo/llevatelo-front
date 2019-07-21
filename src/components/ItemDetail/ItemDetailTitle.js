import React, { Component } from "react";

class ItemDetailTitle extends Component {
  render() {
    return (
      <div className="page-title">
        <div className="container clearfix">
          <div className="float-left float-xs-none">
            <h1>
              Regalo varios libros
              <span className="tag">Regalo</span>
            </h1>
            <h4 className="location">
              <a href="/">Bogotá, Colombia</a>
            </h4>
          </div>
          <div className="float-right float-xs-none price">
            <div className="id opacity-50">
              <strong>ID: </strong> 3479
            </div>
          </div>
        </div>
        {/*end container*/}
      </div>
    );
  }
}

export default ItemDetailTitle;
