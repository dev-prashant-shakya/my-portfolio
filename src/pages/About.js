import React from "react";
import Avatar from "../components/About/Avatar";
import LightAnimation from "../components/About/LightAnimation";
import classes from "./About.module.css";
import data from "../localization/localization.json";
import AboutJourney from "../components/About/About-journey";
import ImprovingWeb from "../components/About/About-improving-web";

function AboutMe () {
    return (
        <>
        <div className="container">
            <div className={classes.wrapper}>
                <div className="profilePic">
                    <Avatar/>
                    <div className={classes.tagline}>
                        {data.aboutPageText.Localization.aboutTagLine}
                        <span className={classes.writer}>{data.aboutPageText.Localization.tagLineWriter}</span>
                    </div>
                </div>
                <div className="aboutText">
                    <h1 className={classes.aboutHeading}>{data.aboutPageText.Localization.portFolioOwner}</h1>
                    <div className="subHeading">
                        <LightAnimation/>
                    </div>
                    <p className={classes.details} dangerouslySetInnerHTML={{__html: data.aboutPageText.Localization.aboutPortFolioOwner}}></p>
                </div>
            </div>
            <p className={classes.subdetails} dangerouslySetInnerHTML={{__html: data.aboutPageText.Localization.aboutPortfolioOwnerSub}}></p>
        </div>
        <AboutJourney/>
        <ImprovingWeb/>
        </>
    )
}
export default AboutMe;