import React, { Component } from "react";

class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='item'>
        <div className="wrapper">
          <div className="image">
            <h3>
              <a href="/" className="tag category">
                {this.props.cateogry}
              </a>
              <a href="/details" className="title">
                Regalo varios libros
              </a>
              <span className="tag">{this.props.type}</span>
            </h3>
            <a href="/details" className="image-wrapper background-image"
              style={{backgroundImage: 'url("http://themestarz.net/html/craigs/assets/img/image-20.jpg")'}}>
            </a>
          </div>
          <h4 className="location">
            <a href="/">{this.props.city}</a>
          </h4>
          <div className="meta">
            <figure>
              <i className="fa fa-calendar-o" />
              {this.props.date}
            </figure>
            <figure>
              <a href="/">
                <i className="fa fa-user" />
                {this.props.author}
              </a>
            </figure>
          </div>

          <div className="description">
            <p>
            {this.props.description}
            </p>
          </div>
          <a href="/details" className="detail text-caps underline">Ver mas</a>
        </div>
      </div>
    );
  }
}

export default Item;
