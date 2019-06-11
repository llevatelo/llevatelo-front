import React from "react";
import ItemDetailHeader from "../ItemDetail/ItemDetailHeader";
import Footer from "../Complements/Footer";

function ItemDetailLayout(props) {
  return (
    <React.Fragment>
      <header className="hero">
        <ItemDetailHeader />
      </header>
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default ItemDetailLayout;
