import React from "react";
import classes from './LightAnimation.module.css';
function LightAnimation () {
    // const profileName = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '👌'];
    const profileName = ["Software Engineer", "Web Developer", "MERN Stack Developer", "Product Management", "Team Player", "Leader", "Problem Solver", "Always on time", "Accountable", "Content Creator", "Loves Sprituality & Yoga"]
    return (
        <ul className={classes.lightAnimation}>
            {profileName.map((letter, index) => (
                <li key={index}>{letter}</li>
            ))}
        </ul>
    )
}
export default LightAnimation