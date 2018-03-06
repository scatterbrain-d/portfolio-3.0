import React from "react";

import classes from "./Project.css";



const project = (props) => {
    
    let website = (
      <a href={props.website}>
        <button>Website</button>
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
        
        <div className= {classes.content}>
          {props.body}
          <a href={props.github}>
            <button>Github</button>
          </a>
          {website}
        </div>
      </div>
    );
};

export default project;