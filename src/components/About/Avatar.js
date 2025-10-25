import React from "react";
import classes from './Avatar.module.css';
import data from '../../localization/localization.json';
function Avatar () {
    const avatarImage = () => {
        return (
            "../../images/avatar.jpg"
        );
    };
    return (
        <div className={classes.avatar}>
            <img className={classes.avatarPic} src={avatarImage()} alt={data.aboutPageText.Localization.aboutAvatarImageAltText}/>
            <div className={classes.ring}></div>
        </div>
    );
};
export default Avatar;