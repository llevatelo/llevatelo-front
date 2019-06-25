import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import FormCollapse from "../Navbar/FormCollapse";
import PageHeader from "../Complements/PageHeader";

class ProfileHeader extends Component {
  render() {
    return (
      <div className="hero-wrapper">
        <Navbar />
        <FormCollapse />
        <PageHeader title={this.props.title} />
        <div className="background" />
      </div>
    );
  }
}

export default ProfileHeader;
