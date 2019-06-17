import React, { Component } from "react";
import ListingFullWidth from '../components/Home/ListingFullWidth';
import HomeLayout from '../components/Layouts/HomeLayout';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <HomeLayout>
          <ListingFullWidth />
        </HomeLayout>
      </div>
    );
  }
}

export default Home;

