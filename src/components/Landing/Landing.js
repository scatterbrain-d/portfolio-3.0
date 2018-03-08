import React from "react";

import classes from "./Landing.css";
import astronaut from "../../assets/images/astronaut.svg";


const landing = () => {
    return (
      <div className={classes.hero}>
        <img src={astronaut} alt="astronaut"/>
        <div className={classes.textbox}>
          <h1>I'm Andy. </h1>
          <h1>I make websites...</h1>
          <h1 className={classes.big}>IN SPACE!!</h1>
        </div>
      </div>
    );
};

export default landing;