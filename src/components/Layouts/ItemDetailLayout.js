import React from "react";
import Navbar from "../Navbar/Navbar";
import ItemDetailTitle from "../ItemDetail/ItemDetailTitle";
import Footer from "../Complements/Footer";

function ItemDetailLayout(props) {
  return (
    <React.Fragment>
      <header className="hero">
        <div className="hero-wrapper">
          <Navbar />
          <ItemDetailTitle price="100" />
          <div className="background" />
        </div>
      </header>
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default ItemDetailLayout;
