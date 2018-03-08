import React from "react";

import classes from "./EdgeTab.css";


const edgeTab = (props) => {
    
    //put label string into an array in order to use .map function in JSX
    let labelArray = [];
    for(let letter of props.label) {
            labelArray.push(letter.toUpperCase());
          }
    
    //component slides differently based on label
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