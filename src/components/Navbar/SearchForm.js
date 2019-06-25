import React, { Component } from "react";
import { Button, Input } from 'reactstrap';
import BackgroundIcons from "../../assets/img/hero-background-icons.jpg";
import "./styles.scss";

class SearchForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: [
        { value: 'Computers', label: 'Computers' },
        { value: 'Real Estate', label: 'Real Estate' },
        { value: 'Cars/Motorcycles', label: 'Cars and Motorcycles' },
      ]
    }
  }

  render() {
    return (
      <div className="hero-wrapper">
        <div className="page-title">
          <div className="container">
            <h1 className="opacity-40 center">
              <a href="/">Intercambia</a>, <a href="/">Regale</a>&nbsp;
              o <a href="/">Busque </a> lo que necesites
            </h1>
          </div>
        </div>

        <form className="hero-form form">
          <div className="container">
            <div className="main-search-form">
              <div className="form-row">
                <div className="col-md-9 col-sm-9">
                  <div className="form-group">
                    <Input
                      type="text"
                      name="search"
                      id='search'
                      className='form-control'
                      placeholder="¿Que estás buscando?"
                    />
                  </div>
                </div>
                <div className="col-md-3 col-sm-3">
                  <Button type="submit" color="primary" className='width-100'>
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/*============ End Hero Form ======================================================================*/}
        <div className="background">
          <div className="background-image original-size">
            <img src={BackgroundIcons} alt="" />
          </div>
          {/*end background-image*/}
        </div>
        {/*end background*/}
      </div>
    );
  }
}

export default SearchForm;
