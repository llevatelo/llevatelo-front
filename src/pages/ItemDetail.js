import React, { Component } from "react";
import ItemDetailCarousel from '../components/ItemDetail/ItemDetailCarousel';
import UserSidebar from '../components/Complements/UserSidebar';
import ItemDetailLayout from '../components/Layouts/ItemDetailLayout';
import "./styles.scss";

class ItemDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <ItemDetailLayout>
          <div className="page sub-page">
            <section className="content">
              <section className="block">
                <div className="container">
                  <ItemDetailCarousel />
                  <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-8">
                      <section>
                        <h2>Descripción</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                          amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                          per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                          risus mi euismod elit, in dictum justo lacus sit amet dui. Sed faucibus vitae nisl
                          at dignissim.
                        </p>
                      </section>

                      <section>
                        <h2>Detalles</h2>
                        <dl className="columns-1">
                          <dt>Ubicación:</dt>
                          <dd>Bogotá</dd>
                          <dt>Type</dt>
                          <dd>Regalo</dd>
                          <dt>Categoria</dt>
                          <dd>Libros</dd>
                        </dl>
                      </section>

                      <section>
                        <h2>Compartir</h2>
                        <div class="float-left text-align-right social">
                          <a href="#"><i class="fa fa-facebook-square"></i></a>
                          <a href="#"><i class="fa fa-twitter-square"></i></a>
                          <a href="#"><i class="fa fa-instagram"></i></a>
                        </div>
                      </section>
                    </div>

                    <UserSidebar />
                  </div>
                </div>
              </section>
            </section>
          </div>
        </ItemDetailLayout>
      </div>
    );
  }
}

export default ItemDetails;

