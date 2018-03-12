import React from "react";
import EdgeTab from "../EdgeTab/EdgeTab";

import classes from "./About.css";
import iceland from "../../assets/images/iceland.jpg";

const about = (props) => {
  return (
    <div 
      className={classes.about}
      style={{transform: props.show ? "translateX(0)" : "translateX(calc(-100% + 40px))"}}
    >
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.container}>
            <img src={iceland} alt=""/>
            <p>
                Hello and welcome! I'm a self-taught full-stack web developer living Austin, Texas.
                I love building apps and learning new technologies! All my projects feature mobile-ready 
                responsive design, organized, documented, dry code, and design both fun and functional. 
                I'm proficient with the following technologies:
            </p>
            <div className={classes.bullets}>
              <ul>
                <li>Javascript/ES6</li>
                <li>CSS3, Bootstrap, Semantic UI, etc.</li>
                <li>Node.js with Express</li>
              </ul>
              <ul>
                <li>React/Redux</li>
                <li>MongoDB, SQL</li>
                <li>Blockchain architecture</li>
              </ul>
            </div>
            <p>
                Other hobbies include hiking, reading, sculpture, D&D and other tabletop games,
                cooking, movies, and spending time with my beautiful wife and daughter!
            </p>
            <p>
                Want to know more? Feel free to check out the links below or <a href="mailto:andy.finnell@gmail.com">email me!</a>
            </p>
          </div>
        </div>
        <EdgeTab
            label= "about"
            clicked= {props.clicked}
            vertical= {true}
        />
      </div>
    </div>
  );
};

export default about;