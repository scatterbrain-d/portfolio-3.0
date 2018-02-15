import React, {Component} from "react";

import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Landing from "../../components/Landing/Landing";
import Project from "../../components/Project/Project";
import EdgeTab from "../../components/EdgeTab/EdgeTab";

import {projectArray} from "../../assets/projectArray";

class Layout extends Component {
  
  state = {
    showAbout: false,
    showContact: false
    
  }
  
  //slides "About" section in and out from left 
  aboutHandler = () => {
    this.setState({
      showAbout: !this.state.showAbout, 
      showContact: false
    });
  }
  
  //slides "Contact" section in and out from right
  contactHandler = () => {
    this.setState({
      showContact: !this.state.showContact,
      showAbout: false
    });
  }
  
  
  render() {
    return (
        <div>
          
          {//tabs on either side for About and Contact sections
          }
          <EdgeTab
            label= "about"
            show={this.state.showAbout}
            clicked= {this.aboutHandler}
          />
          <EdgeTab
              label= "contact"
              show={this.state.showContact}
              clicked= {this.contactHandler}
          />
          
          {//About/Contact sections offscreen by default
          }
          <About
            show={this.state.showAbout}
          />
          
          <Contact
            show={this.state.showContact}
          />
          
          {//Hero section followed by several project sections
          }
          <Landing/>
          
          {projectArray.map(project => (
            <Project
              key={project.title}
              title={project.title}
              website={project.website}
              github={project.github}
              body={project.body}
            />
          ))}
          
          
        </div>
      );
  }
}

export default Layout;