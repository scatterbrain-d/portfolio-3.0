import React from "react";

import classes from "./EdgeTab.css";


const edgeTab = (props) => {
    
    // edgeTab is a reusable UI component that is used to change the view.
    // props.label and props.vertical pass information that is used to configure
    // the position, behavior, and orientation of the tab.
    
    
    // put label string into an array in order to use .map function in JSX
    
    let labelArray = [];
    for(let letter of props.label) {
            labelArray.push(letter.toUpperCase());
          }
    
    // component slides screen differently based on label. For a truly generic component
    // I would use a seperate prop for this, but the extra code seemed uneccessary for
    // a project of this scale.
    
    let slide;
    switch (props.label) {
      case ("top"):
        slide = "translateY(-100%)";
        break;
      case ("projects"):
        slide = "translateY(100%)";
        break;
      default: break;
    }
      
    return (
      <div 
        className={classes.edge + " " + classes[props.label]}
        style={{transform: props.show ? slide : "translate(0, 0)"}}  
      >
        <div
          className={classes.tab}
          onClick={props.clicked}
        >  
            {labelArray.map((letter, index) => 
              ( <p 
                  key={index}
                  style ={{display: props.vertical ? "block" : "inline"}}
                >
                {letter}
                </p>))}
        </div>
      </div>
    );
};

export default edgeTab;