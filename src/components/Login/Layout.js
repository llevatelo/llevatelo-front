import React, {Component} from "react";
import Footer from "../Complements/Footer";
import Header from "./Header";

class Layout extends Component {
  constructor(props){
    super(props)
  }
  /* const children = props.children; */
  render() {
    return(
      <React.Fragment>
        <header className="hero">
          <Header title={this.props.title} />
        </header>
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
