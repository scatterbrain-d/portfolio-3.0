import React, { Component } from 'react';

import Layout from "./containers/Layout/Layout";
import bg from "./assets/images/bg.svg";

class App extends Component {
  render() {
    
    const stars = "url(" + bg + ")";
    
    return (
      <div 
        className="App"
        style={{backgroundImage: stars}}
      >
        <Layout/>
      </div>
    );
  }
}

export default App;
