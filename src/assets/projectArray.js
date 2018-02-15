import React from "react";

import chronicle from "./images/chronicles.png";
import farm from "./images/lilyfarm.png";
import wok from "./images/wok.png";

export const projectArray = [
    {   
        title: "Monster Builder",
        website: "",
        github: "https://github.com/scatterbrain-d/monster-builder",
        body: (
            <div>
                <h2>(under construction)</h2>
                <p>
                    Another tool for my D&D group, this app creates custom
                    monsters for use in games.
                </p>
                <ul>
                    <li>Single page format with React</li>
                    <li>State management via Redux</li>
                    <li>Responsive layout with CSS grid</li>
                    <li>Form validation</li>
                    <li>CSS modules</li>
                    <li>User authentication via Firebase</li>
                    <li>Database to save creations via Firebase</li>
                </ul>
                <p>Future updates will add:</p>
                <ul>
                    <li>Ability to share creations with others</li>
                    <li>"Battle mode" for use during a game</li>
                </ul>
                <hr/>
            </div>
        )
    },
    {
        title: "D&D Chronicles",
        website: "https://dnd-chronicles.herokuapp.com/sessions",
        github: "https://github.com/scatterbrain-d/dnd-chronicles",
        body: (
            <div>
                <a href="https://dnd-chronicles.herokuapp.com/sessions">
                    <img src={chronicle} alt=""/>
                </a>
                <p>
                    Designed to document an ongoing Dungeons and Dragons campaign,
                    this full stack application combines a blog template with a character
                    repository. Responsive design facilitates use on mobile devices.
                </p>
                <ul>
                    <li>Node.js back end</li>
                    <li>Express framework</li>
                    <li>RESTful routing</li>
                    <li>EJS templates</li>
                </ul>
                <ul>
                    <li>Two linked MongoDB databases</li>
                    <li>Bootstrap and custom css</li>
                    <li>Responsive layout</li>
                    <li>Modular file system</li>
                </ul>
                <hr/>
            </div>
        )
    },
    {
        title: "",
        website: "http://farm.afinnell.com",
        github: "https://github.com/scatterbrain-d/lilys-farm",
        body: (
            <div>
                <h2 id="farm-content">Lily's Farm</h2>
                <a href="http://farm.afinnell.com">
                    <img src={farm} alt=""/>
                </a>
                <p>
                    I designed this game for my two-year-old daughter.
                    Colorful animals move across the screen and react when
                    clicked or touched. Modular design allows easy addition
                    and variation to featured animals. Background and animal
                    design provided by my lovely and talented wife.
                </p>
                <ul>
                    <li>Responsive layout</li>
                    <li>Dynamic DOM element creation</li>
                    <li>Animation with CSS</li>
                    <li>Difficulty settings</li>
                </ul>
                <hr/>
            </div>
        )
    },
    {
        title: "Wok of the Falls",
        website: "http://wok.afinnell.com",
        github: "https://github.com/scatterbrain-d/wokofthefalls",
        body: (
            <div>
                <a href="http://wok.afinnell.com">
                    <img src={wok} alt=""/></a>
                <p>
                    I designed this website for a friend's family restaurant.
                    I worked with the client to design a site that met their
                    requirements and expectations. Mobile-first responsive
                    design and a single-page design using React keeps the site
                    flexible and quick.
                </p>
                <ul>
                    <li>Modular design with React</li>
                    <li>Responsive layout</li>
                    <li>Selective component routing</li>
                    <li>Image slider and other custom styling</li>
                </ul>
                <hr/>
            </div>
        )
    }
];