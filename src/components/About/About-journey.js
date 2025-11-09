import React from "react";
import data from "../../localization/localization.json";
import classes from './AboutJourney.module.css';
function AboutJourney() {

    const renderImage = () => {
        return (
            '../../images/web-development.svg'
        );
    };

    return (
        <div className={classes.journeyWrapper}>
            <h2 className={classes.journeyHeading}>{data.aboutPageText.Localization.aboutJourneyHeading}</h2>
            <div className={classes.journeyContainer}>
                <div className={classes.journeyData}>
                    <div className={classes.para}>
                    <p dangerouslySetInnerHTML={{__html: data.aboutPageText.Localization.aboutJourneyFirstPara}}></p>
                    </div>
                </div>
                <div className={classes.journeyImage}>
                    <img src={renderImage()} alt={data.aboutPageText.LocalizationaboutJourneyImageAltText} />
                </div>
            </div>
            <div className={classes.journeyContainerSecond}>
                <div className={classes.para}>
                    <p dangerouslySetInnerHTML={{__html: data.aboutPageText.Localization.aboutJourneySecondPara}}></p>
                </div>
                <div className={classes.para}>
                    <p dangerouslySetInnerHTML={{__html: data.aboutPageText.Localization.aboutJourneyThirdPara}}></p>
                </div>
            </div>
        </div>
    )
}
export default AboutJourney;