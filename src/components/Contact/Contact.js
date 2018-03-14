import React from "react";
import EdgeTab from "../EdgeTab/EdgeTab";
import satellite from "../../assets/images/satellite.svg";
import moon from "../../assets/images/moon.svg";

import classes from "./Contact.css";

const contact = (props) => {
    
    return (
      
    // Contact page stays offscreen by default with only the edgetab showing. 
    // Clicking tab toggles props.show, which slides the page in and out.
      
      <div 
        className={classes.contact}
        style={{transform: props.show ? "translateX(0)" : "translateX(calc(100% - 40px))"}}
      >
        <div className={classes.wrapper}>
          <EdgeTab
            label= "contact"
            clicked= {props.clicked}
            vertical = {true}
          />
          <div className={classes.content}>
            <img className={classes.satellite} src={satellite} alt="satellite"/>
            <div className={classes.container}>
              <p><strong>
                  Contact me by <a href="mailto:andy.finnell@gmail.com">email</a>, 
                  or send me a message with the form below.
              </strong></p>
              <hr/>
              <form action="https://formspree.io/andy.finnell@gmail.com" method="POST">
                <div>
                    <label id="name">Name: </label>
                    <input id="name" type="text" name="name"/>
                </div>
                <div>
                    <label id="email">Email: </label>
                    <input id="email" type="email" name="email"/>
                </div>
                <div>
                    <label id="company">Company: </label>
                    <input id="company" type="text" name="compnay"/>
                </div>
                    <label id="message">Message: </label>
                    <textarea name="content"></textarea>
                <div className={classes.submit}>
                  <button type="submit">SUBMIT</button>
                </div>
              </form>
            </div>
            <img className={classes.moon} src={moon} alt="moon"/>
          </div>
        </div>
      </div>
    );
};

export default contact;