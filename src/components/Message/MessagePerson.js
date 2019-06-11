import React, { Component } from "react";
import Image01 from "../assets/img/image-01.jpg";
class MessagePerson extends Component {
  render() {
    return (
      <div>
        <li>
          <a href="/" className="messaging__person">
            <figure
              className="messaging__image-item"
              data-background-image={Image01}
            />
            <figure className="content">
              <h5>{this.props.name}</h5>
              <p>
                Suspendisse potenti. Quisque vel ipsum in purus pretium
                malesuada.{" "}
              </p>
              <small>24.08.2016</small>
            </figure>
            <figure
              className="messaging__image-person"
              data-background-image="assets/img/author-06.jpg"
            />
          </a>
          {/*messaging__person*/}
        </li>
      </div>
    );
  }
}

export default MessagePerson;
