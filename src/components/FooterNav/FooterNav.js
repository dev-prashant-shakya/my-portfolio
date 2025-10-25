import React from "react";
import { Link } from "react-router-dom";
import classes from './FooterNav.module.css';
import data from '../../localization/localization.json';

const socialMediaUrl = [
    {
        linkedin: 'https://www.linkedin.com/in/prashant-shakya24/',
        Instagram: 'https://www.instagram.com/adidevsoul_official/'
    }
];

const FooterItems = [
    {
        id: 1,
        to: '/',
        text: `${data.footerText.Localization.footerHome}`
    },
    {
        id: 2,
        to: '/projects',
        text: `${data.footerText.Localization.footerProjects}`
    },
    {
        id: 2,
        to: '/technologies',
        text: `${data.footerText.Localization.footerTechnologies}`
    }
];

const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 300)
};

function FooterNav() {
    return (
        <div className={classes.footerNav}>
            <div className={classes.footerContainer}>
                <div className={classes.footerLinksWrap} role="contentinfo">
                    <div className="footer-links">
                        <ul className={classes.footerUl}>
                            {FooterItems.map((FooterLink) => {
                                return (<li key={FooterLink.id}>
                                    <Link to={FooterLink.to} onClick={scrollToTop}>{FooterLink.text}</Link>
                                </li>)
                            })}
                        </ul>
                    </div>
                    <div className={classes.footerCont}>
                        <p>{data.footerText.Localization.madeInIndiaText} <span className={classes.heartBeat}>❤️</span></p>
                    </div>
                    <div className={classes.footerContSocial}>
                        <div className={classes.links}>
                            <span className={classes.linkedin}><Link target="_blank" to={socialMediaUrl[0].linkedin}>👔</Link></span>
                            <span className={classes.instagram}><Link target="_blank" to={socialMediaUrl[0].Instagram}>📸</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterNav;