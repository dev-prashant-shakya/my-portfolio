import React from "react";
import { Link } from "react-router-dom";
import data from '../../localization/localization.json';
import classes from './Navigation.module.css';

const linkItems = [
    {
        id: 1,
        to: '/',
        text: `${data.navigationText.Localization.navAbout}`
    },
    {
        id: 2,
        to: 'projects',
        text: `${data.navigationText.Localization.navExpertise}`
    },
    {
        id: 3,
        to: 'technologies',
        text: `${data.navigationText.Localization.navTechnologies}`
    },
    {
        id: 4,
        to: 'resume',
        text: `${data.navigationText.Localization.navResume}`
    },
    {
        id: 5,
        to: 'connect',
        text: `${data.navigationText.Localization.navConnect}`
    },
    {
        id: 6,
        to: 'news',
        text: `${data.navigationText.Localization.navNews}`
    }
]
function NavItems () {
 return (
    <ul className={classes.navUl}>
        {linkItems.map((link) => {
            return (<li key={link.id}><Link to={link.to} data-content={link
            .text}>{link.text}</Link></li>)
        })}
    </ul>
 )
}
export default NavItems;