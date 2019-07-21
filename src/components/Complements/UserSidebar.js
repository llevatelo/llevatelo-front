import React, { Component } from "react";
import ImageAuthor01 from "../../assets/img/author-01.jpg";
import { Alert } from 'reactstrap';

class UserSidebar extends Component {
  render() {
    return (
      <div className="col-md-4">
        <aside className="sidebar user-sidebar">
          <section>
            <h2>Contacto: </h2>
            <div className="box">
              <div className="author">
                <div className="author-image">
                  <div className="background-image"
                  style={{backgroundImage: `url(${ImageAuthor01})`}}>
                  >
                  </div>
                </div>
                <div className="author-description">
                  <h3>Jane Doe</h3>
                  <div className="rating" data-rating={4} />
                  <a href="seller-detail-1.html" className="text-uppercase">
                    Ver mas artículos de Jane Doe
                    <span className="appendix">(12)</span>
                  </a>
                </div>
              </div>
              <hr />
              <dl>
                <dt>Teléfono</dt>
                <dd>****0930</dd>
                <dt>Email</dt>
                <dd>****@gmail.com</dd>
              </dl>
              <form className="form email">
                <div className="form-group">
                  <label htmlFor="name" className="col-form-label">
                    Nombre
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="col-form-label">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Hola! Estoy interesando por este articulo. por favor deme mas detalles, gracias"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>

              <Alert color="warning">
                <p>
                  <b>Llevatelo.co</b> NO participa en ninguna negociación, Sólo se limita a la publicación de los artículos de sus usuarios.
                </p>
              </Alert>
            </div>
          </section>
        </aside>
      </div>
    );
  }
}

export default UserSidebar;
