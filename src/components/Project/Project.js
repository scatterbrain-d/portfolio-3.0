import React from "react";

import classes from "./Project.css";

const project = (props) => {
    return (
      <div className={classes.projectContainer}>
        <div className={classes.title}>
        
        </div>
        
        <div className= {classes.content}>
          {props.body}
        </div>
      </div>
    );
};

export default project;