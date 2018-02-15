import React from "react";

import classes from "./About.css";
import iceland from "../../assets/images/iceland.jpg";

const about = (props) => {
    return (
      <div 
        className={classes.about}
        style={{transform: props.show ? "translateX(0)" : "translateX(-100%)"}}
      >
        <div>
                <img src={iceland} alt=""/>
                <p>
                    Hello and welcome! I'm a self-taught full-stack web developer living Austin, Texas.
                    Programming has been a hobby of mine for a while, and now I'm ready
                    to take the plunge into the professional web dev world. I posses the following
                    skills:
                </p>
                <ul>
                    <li>Javascript/ES6</li>
                    <li>CSS3, Bootstrap, Semantic UI, etc.</li>
                    <li>Node.js with Express</li>
                    <li>EJS/JSX templates</li>
                    <li>React, Angular, Vue, Redux</li>
                    <li>MongoDB/SQL</li>
                    <li>Mobile-ready layouts with CSS grid/flexbox</li>
                    <li>Creative/artistic design</li>
                </ul>
                <p>
                    Other hobbies include hiking, reading, sculpture, D&D and other tabletop games,
                    cooking, movies, and spending time with my beautiful wife and daughter!
                </p>
                <p>
                    Want to know more? Feel free to check out the links below or <a href="mailto:andy.finnell@gmail.com">email me!</a>
                </p>
            </div>
      </div>
    );
};

export default about;