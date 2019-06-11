import React from "react";
import Footer from "../Complements/Footer";
import ProfileHeader from "../Profile/ProfileHeader";

function ProfileLayout(props) {
  /* const children = props.children; */
  return (
    <React.Fragment>
      <header className="hero">
        <ProfileHeader title={props.title} />
      </header>
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default ProfileLayout;
