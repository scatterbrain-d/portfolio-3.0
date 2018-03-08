import React from "react";
import EdgeTab from "../EdgeTab/EdgeTab";

import classes from "./Contact.css";

const contact = (props) => {
    return (
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
            <div className={classes.formContainer}>
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
                <div><button type="submit">Submit</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default contact;