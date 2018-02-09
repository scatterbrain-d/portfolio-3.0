import React, { Component } from 'react';

import Nav from "./components/Nav/Nav";
import Layout from "./containers/Layout/Layout";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Layout/>
      </div>
    );
  }
}

export default App;
