import React from "react";

import classes from "./Project.css";



const project = (props) => {
    
    let website = (
      <a href={props.website}>
        <button>WEBSITE</button>
      </a>
    );
    
    if(props.website === "")
      website = null;
    
    return (
      <div className={classes.projectContainer}>
        <div className={classes.title}>
          <h2>{props.title}</h2>
          {props.image}
        </div>
        
        <div className={classes.content}>
          {props.body}
          <div className={classes.buttons}>
            <a href={props.github}>
              <button>GITHUB</button>
            </a>
            {website}
          </div>
          
        </div>
      </div>
    );
};

export default project;