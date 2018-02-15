import React from "react";

import classes from "./EdgeTab.css";


const edgeTab = (props) => {
    
    //put label string into an array in order to use .map function in JSX
    let labelArray = [];
    for(let letter of props.label) {
            labelArray.push(letter.toUpperCase());
          }
    
    //component slides differently based on label
    let slide = "translateX(90vw)";
    if (props.label === "contact") slide = "translateX(-90vw)";
    
      
    return (
      <div 
        className={classes.edge + " " + classes[props.label]}
        style={{transform: props.show ? slide : "translateX(0)"}}  
      >
        <div
          onClick={props.clicked}
        >  
            {labelArray.map((letter, index) => 
              ( <p key={index}>{letter}</p>)
            )}
        </div>
      </div>
    );
};

export default edgeTab;