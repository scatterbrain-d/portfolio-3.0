import React, {Component} from "react";

import Landing from "../../components/Landing/Landing";
import Project from "../../components/Project/Project";

class Main extends Component {
    render () {
        return (
        <div>
            
            <AboutTab/>
            <Landing/>
            <ContactTab/>
            
            <Project/>
        </div>    
        );
    }
}

export default Main;