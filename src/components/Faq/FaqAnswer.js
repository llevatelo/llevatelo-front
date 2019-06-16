import React, { Component } from "react";

class FaqAnswer extends Component {
  render() {
    return (
      <div className="answer">
        <div className="box">
          <h3>
            Sed tincidunt vel orci sed fermentum. Nullam nec turpis blandit?
          </h3>
          <p>
            Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu
            enim, scelerisque gravida lacus vel, dignissim cursus lectus.
            Aliquam laoreet purus in iaculis sodales. Morbi convallis diam ac
            accumsan placerat. Donec ultrices placerat arcu non accumsan
          </p>
        </div>
        <figure>
          Was this answer helpful?{" "}
          <a href="/">
            Yes
            <i className="fa fa-thumbs-up" />
          </a>{" "}
          <a href="/">
            No
            <i className="fa fa-thumbs-down" />
          </a>
        </figure>
      </div>
    );
  }
}

export default FaqAnswer;
