import React from "react";
import classes from './LightAnimation.module.css';
function LightAnimation () {
    const profileName = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '👌'];
    return (
        <ul className={classes.lightAnimation}>
            {profileName.map((letter, index) => (
                <li key={index}>{letter}</li>
            ))}
        </ul>
    )
}
export default LightAnimation