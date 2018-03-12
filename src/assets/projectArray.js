import React from "react";

import chronicle from "./images/chronicles.png";
import farm from "./images/lilyfarm.png";
import wok from "./images/wok.png";
import smoola from "./images/smoola.svg";
import builder from "./images/builder.png";

export const projectArray = [
    {   
        title: "$moola API",
        website: "",
        github: "https://github.com/scatterbrain-d/smoola-cryptocurrency",
        image: <img src={smoola} alt=""/>,
        body: (
            <div>
                <p>
                    $moola is a fully-functioning cryptocurrency API based on modern blockchain architecture.
                </p>
                <ul>
                    <li>Written in Node.js, tested with Jest, with encryption from crypto-js and elliptic</li>
                    <li>Blockchain and transaction pool synced on a distributed websockets network</li>
                    <li>Secure user wallets that determine balances from the blockchain itself</li>
                    <li>Blockchain mining with cryptocurrency reward</li>
                    <li>Mining proof of work difficulty set dynamically based on activity</li>
                    <li>Numerous validation checks throughout the process to reject data tampering</li>
                </ul>
                <hr/>
            </div>
        )
    },
    {   
        title: "D&D Monster Builder",
        website: "http://monster-builder.afinnell.com",
        github: "https://github.com/scatterbrain-d/monster-builder",
        image: (
            <a href="http://monster-builder.afinnell.com">
                <img src={builder} alt=""/>
            </a>
            ),
        body: (
            <div>
                <p>
                    Created as a tool for my Dungeons & Dragons group, 
                    this app creates and saves custom monsters for use in 
                    games. Persistent data state much as monster stats are 
                    handled with Redux, while local UI state changes remain
                    within the scope of React's state.
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
                    <li>Ability to flag creations as public so others can access them</li>
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
        image: (
            <a href="https://dnd-chronicles.herokuapp.com/sessions">
                <img src={chronicle} alt=""/>
            </a>
            ),
        body: (
            <div>
                <p>
                    Designed to document an ongoing Dungeons & Dragons campaign,
                    this full stack application combines a blog format with a character
                    gallery. Responsive design facilitates use on mobile devices.
                </p>
                <ul>
                    <li>Node.js back end</li>
                    <li>Express framework</li>
                    <li>RESTful routing</li>
                    <li>EJS templates</li>
                    <li>Two linked MongoDB databases</li>
                    <li>Bootstrap and custom css</li>
                    <li>Modular file system</li>
                </ul>
                <hr/>
            </div>
        )
    },
    {
        title: "Lily's Farm",
        website: "http://farm.afinnell.com",
        github: "https://github.com/scatterbrain-d/lilys-farm",
        image: (
            <a href="http://farm.afinnell.com">
                <img src={farm} alt=""/>
            </a>
            ),
        body: (
            <div>
                <p>
                    I designed this game for my two-year-old daughter.
                    Colorful animals move across the screen and react when
                    clicked or touched. Modular design allows easy addition
                    and variation to featured animals. Background and animal
                    design provided by my lovely and talented wife.
                </p>
                <ul>
                    <li>Responsive layout</li>
                    <li>Vanilla JS</li>
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
        image: (
                <a href="http://wok.afinnell.com">
                    <img src={wok} alt=""/>
                </a>
            ),
        body: (
            <div>
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