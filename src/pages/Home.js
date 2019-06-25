import React, { Component } from "react";
import Items from '../components/Home/Items';
import HomeLayout from '../components/Layouts/HomeLayout';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <HomeLayout>
          <Items />
        </HomeLayout>
      </div>
    );
  }
}

export default Home;

