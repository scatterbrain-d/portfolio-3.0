import React, {Component} from "react";
import scrollToComponent from "react-scroll-to-component";

import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Landing from "../../components/Landing/Landing";
import Project from "../../components/Project/Project";
import EdgeTab from "../../components/EdgeTab/EdgeTab";

import {projectArray} from "../../assets/projectArray";

class Layout extends Component {
  
  state = {
    showAbout: false,
    showContact: false,
    hideProjects: false,
    hideTop: true
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }
  
  tabHandler = (tab) => {
    switch(tab) {
      case("about"): {
        return this.setState({
          showAbout: !this.state.showAbout, 
          showContact: false
        });
      }  
      case("contact"): {
        return this.setState({
          showContact: !this.state.showContact,
          showAbout: false
        });
      }
      case("projects"): {
        scrollToComponent(this.Projects, {align: "top"});
        return this.setState({
          hideProjects: true,
          hideTop: false
        });
      }
      case("top"): {
        scrollToComponent(this.Top);
        return this.setState({
          hideProjects: false,
          hideTop: true
        });
      }
      default: return;
    }
  }
  
  scrollListener = () => {
    if (window.pageYOffset < 20) {
      return this.setState({
          hideProjects: false,
          hideTop: true
        });  
    } else {
      this.setState({
        hideProjects: true,
        hideTop: false
      });
    }
  }
  
  render() {
    return (
        <div
          onScroll = {this.scrollListener}
        >
          <EdgeTab
              label= "projects"
              show={this.state.hideProjects}
              clicked= {() => this.tabHandler("projects")}
              vertical = {false}
          />
          <EdgeTab
              label= "top"
              show={this.state.hideTop}
              clicked= {() => this.tabHandler("top")}
              vertical = {false}
          />
          
          {//About/Contact sections offscreen by default
          }
          <About
            show={this.state.showAbout}
            clicked= {() => this.tabHandler("about")}
          />
          
          <Contact
            show={this.state.showContact}
            clicked= {() => this.tabHandler("contact")}
          />
          
          {//Hero section followed by several project sections
          }
          <section 
            ref={(section) => { this.Top = section; }}
          >
            <Landing/>
          </section>
          
          <section ref={(section) => { this.Projects = section; }}>
            {projectArray.map(project => (
              <Project
                key={project.title}
                title={project.title}
                website={project.website}
                github={project.github}
                image={project.image}
                body={project.body}
              />
            ))}
          </section>
          
        </div>
      );
  }
}

export default Layout;