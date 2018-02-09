import React, {Component} from "react";

import About from "./compnents/About/About";
import Contact from "./components/Contact/Contact";
import Main from "./containers/Main/Main";

class Layout extends Component {
  render() {
    return (
        <div>
          <About/>
          <Main/>
          <Contact/>
        </div>
      );
  }
}

export default Layout;