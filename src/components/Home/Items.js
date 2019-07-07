import React, { Component } from "react";
import Item from "./Item";

class Items extends Component {
  render() {
    return (
      <div className="page sub-page">
        <section className="content">
          <section className="block">
            <div className="container">
              <div className="items grid grid-xl-4-items grid-lg-3-items grid-md-2-items">
                <Item
                  city="Nashville, TN"
                  type="Regalo"
                  cateogry= 'Libros'
                  date='6/jul/2019'
                  author= 'Nicolas'
                  description='Proin at tortor eros. Phasellus porta nec elit non lacinia.
                              Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor'
                />

                <Item
                  city="Nashville, TN"
                  type="Cambio"
                  cateogry= 'Libros'
                  date='6/jul/2019'
                  author= 'Juan'
                  description='Proin at tortor eros. Phasellus porta nec elit non lacinia.
                              Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor'
                />

                <Item
                  city="Nashville, TN"
                  type="Regalo"
                  cateogry= 'Libros'
                  date='6/jul/2019'
                  author= 'Hermes'
                  description='Proin at tortor eros. Phasellus porta nec elit non lacinia.
                              Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor'
                />

                <a href="/create-article" className="item call-to-action">
                  <div className="wrapper">
                    <div className="title">
                      <i className="fa fa-plus-square-o" /> Publicar Artículo
                    </div>
                  </div>
                </a>

                <Item
                  city="Nashville, TN"
                  type="Regalo"
                  cateogry= 'Libros'
                  date='6/jul/2019'
                  author= 'Nicolas'
                  description='Proin at tortor eros. Phasellus porta nec elit non lacinia.
                              Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor'
                />

                <Item
                  city="Nashville, TN"
                  type="Cambio"
                  cateogry= 'Libros'
                  date='6/jul/2019'
                  author= 'Juan '
                  description='Proin at tortor eros. Phasellus porta nec elit non lacinia.
                              Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor'
                />

                <Item
                  city="Nashville, TN"
                  type="Regalo"
                  cateogry= 'Libros'
                  date='6/jul/2019'
                  author= 'Hermes'
                  description='Proin at tortor eros. Phasellus porta nec elit non lacinia.
                              Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor'
                />
              </div>

              <div className="page-pagination">
                <nav aria-label="Pagination">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="/" aria-label="Previous">
                        <span aria-hidden="true">
                          <i className="fa fa-chevron-left" />
                        </span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="/">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/" aria-label="Next">
                        <span aria-hidden="true">
                          <i className="fa fa-chevron-right" />
                        </span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Items;
