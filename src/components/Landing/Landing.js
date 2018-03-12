import React from "react";

import classes from "./Landing.css";
import astronaut from "../../assets/images/astronaut.svg";
import cord from "../../assets/images/cord.svg";
import rocket from "../../assets/images/rocket.svg";


const landing = () => {
    return (
      <div className={classes.hero}>
        <img className={classes.astronaut} src={astronaut} alt="astronaut"/>
        <img className={classes.cord} src={cord} alt="tether"/>
        <img className={classes.rocket} src={rocket} alt="rocket"/>
        <div className={classes.textbox}>
          <h1>I'm Andy. </h1>
          <h1>I make websites...</h1>
          <h1 className={classes.big}>IN SPACE!!</h1>
        </div>
      </div>
    );
};

export default landing;