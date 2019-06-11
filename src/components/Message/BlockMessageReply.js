import React, { Component } from "react";

class BlockMessageReply extends Component {
  render() {
    return (
      <div className="messaging__main-chat__bubble user">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default BlockMessageReply;
