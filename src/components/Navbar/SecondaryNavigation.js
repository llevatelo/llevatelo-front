import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SecondaryNavigation extends Component {
  render() {
    return (
      <div className="secondary-navigation">
        <div className="container">
          <ul className="left">
            <li>
              <span>
                <i className="fa fa-phone" /> +57 3015692996
              </span>
            </li>
          </ul>
          {/*end left*/}
          <ul className="right">
            <li>
              <Link to="/my-ads" className='nav-link'>
                <i className="fa fa-heart" />
                Mis Artículos
              </Link>
            </li>
            <li>
              <Link to="/login" className='nav-link'>
                <i className="fa fa-sign-in" />
                Ingresar
              </Link>
            </li>
            <li>
              <Link to="/register" className='nav-link'>
                <i className="fa fa-pencil-square-o" /> Registrarse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SecondaryNavigation;
