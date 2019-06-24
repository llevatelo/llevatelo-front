import React, { Component } from "react";
import Content from './Content';
import Layout from './Layout';

class Login extends Component {
  render() {
    return (
      <Layout title="Login">
        <Content/>
      </Layout>
    )
  }
}

export default Login;
