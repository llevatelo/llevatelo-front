import React, { Component } from "react";
import Logo from "../../assets/img/logo.png";
import FooterImage from "../../assets/img/footer-background-icons.jpg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a href="/" className="brand">
                  <img src={Logo} alt="" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nec tincidunt arcu, sit amet fermentum sem. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra.
                </p>
              </div>
              {/*end col-md-5*/}
              <div className="col-md-5">
                <h2>Navegación</h2>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="/home">Inicio</a>
                        </li>
                        <li>
                          <a href="/help">Ayuda</a>
                        </li>
                        <li>
                          <a href="/terms_and_conditions">Términos y condiciones</a>
                        </li>
                        <li>
                          <a href="/security">Seguridad</a>
                        </li>
                        <li>
                          <a href="/about">Acerca de</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="/">Artículos</a>
                        </li>
                        <li>
                          <a href="/register">Registrarse</a>
                        </li>
                        <li>
                          <a href="/sign_in">Iniciar Sesión</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/*end col-md-3*/}
              <div className="col-md-3">
                <h2>Contacto</h2>
                <address>
                  <strong>Email:</strong> <a href="/">nmena.garzon@gmail.com</a>
                  <br />
                  <strong>Skype: </strong> nmenag
                  <br />
                  <strong>Telegram: </strong> +57 3015692996
                  <br />
                  <strong>Whatsapp: </strong> +57 3015692996
                  <br />
                  <br />
                  <a
                    href="contact.html"
                    className="btn btn-primary text-caps btn-framed"
                  >
                    Contact Us
                  </a>
                </address>
              </div>
              {/*end col-md-4*/}
            </div>
            {/*end row*/}
          </div>
          <div className="background">
            <div className="background-image original-size">
              <img src={FooterImage} alt="" />
            </div>
            {/*end background-image*/}
          </div>
          {/*end background*/}
        </div>
      </footer>
    );
  }
}

export default Footer;
