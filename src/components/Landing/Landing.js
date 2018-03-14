import React from "react";

import classes from "./Landing.css";
import astronaut from "../../assets/images/astronaut.svg";
import cord from "../../assets/images/cord.svg";
import rocket from "../../assets/images/rocket.svg";

// very simple component containing the welcome text and graphics

const landing = () => {
    return (
      <div className={classes.hero}>
        <div className={classes.astrobox}>
          <img className={classes.astronaut} src={astronaut} alt="astronaut"/>
        </div>
        <img className={classes.cord} src={cord} alt="tether"/>
        <img className={classes.rocket} src={rocket} alt="rocket"/>
        <div className={classes.textbox}>
          <h1>I'm Andy. </h1>
          <h1>I make websites...</h1>
          <h1 className={classes.big}>IN SPACE!!<span className={classes.roboto}>*</span></h1>
          <p className={classes.roboto}>* disclaimer - neither Andy nor websites are in space</p>
        </div>
      </div>
    );
};

export default landing;