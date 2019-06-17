import React, { Component } from "react";
import Image21 from "../../assets/img/image-21.jpg";
import Image22 from "../../assets/img/image-22.jpg";
import Image23 from "../../assets/img/image-23.jpg";
import Image14 from "../../assets/img/image-14.jpg";
import Image20 from "../../assets/img/image-20.jpg";
import Image01 from "../../assets/img/image-01.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

class ItemDetailCarousel extends Component {
  render() {
    return (
      <section>
        <div className="gallery-carousel owl-carousel">
          <img src={Image20} alt="" data-hash={1} />
          <img src={Image01} alt="" data-hash={2} />
          <img src={Image21} alt="" data-hash={3} />
          <img src={Image22} alt="" data-hash={4} />
          <img src={Image23} alt="" data-hash={5} />
          <img src={Image14} alt="" data-hash={6} />
        </div>
        <div className="gallery-carousel-thumbs owl-carousel">
          <a href="#1" className="owl-thumb active-thumb background-image">
            <img src={Image20} alt="" />
          </a>
          <a href="#2" className="owl-thumb background-image">
            <img src={Image01} alt="" />
          </a>
          <a href="#3" className="owl-thumb background-image">
            <img src={Image21} alt="" />
          </a>
          <a href="#4" className="owl-thumb background-image">
            <img src={Image22} alt="" />
          </a>
          <a href="#5" className="owl-thumb background-image">
            <img src={Image23} alt="" />
          </a>
          <a href="#6" className="owl-thumb background-image">
            <img src={Image14} alt="" />
          </a>
        </div>
      </section>
    );
  }
}

export default ItemDetailCarousel;
