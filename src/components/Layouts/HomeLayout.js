import React from "react";
import Footer from "../Complements/Footer";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../Navbar/SearchForm";

function HomeLayout(props) {
  return (
    <React.Fragment>
      <header className="hero">
        <Navbar />
        <SearchForm />
      </header>
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default HomeLayout;
