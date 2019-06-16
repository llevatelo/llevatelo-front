import React, { Component } from "react";

class BlockMessageReceive extends Component {
  render() {
    return (
      <div className="messaging__main-chat__bubble">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default BlockMessageReceive;
