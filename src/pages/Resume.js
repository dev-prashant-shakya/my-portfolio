import React, {useEffect, useState} from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import data from '../localization/localization.json';
import classes from "./Resume.module.css";

function Resume () {
    const [notResumeDownloaded, setResumeDownloaded] = useState(true);
    const resumeDownloadedHandler = () => {
        localStorage.setItem('resumeDownloaded', 'true');
        setResumeDownloaded(false);
    }
    const resumePath = () => {
        return (
            "../../images/Prashant-Shakya-Resume.pdf"
        );
    };
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('resumeDownloaded'))) {
            setResumeDownloaded(false);
        }
    }, []);
    
    return (
        <div className="resumeWrapper">
            <PageHeader
                heading={data.resumePageText.Localization.resumePageHead}
                subHeading={data.resumePageText.Localization.resumePagePara}
            />
            <div className={classes.resumeHeaderContainer}>
                <div className={classes.resumeWrapInner}>
                    <p className={classes.resumeDetails} dangerouslySetInnerHTML={{__html: data.resumePageText.Localization.resumePageAboutParaOne}}></p>
                    <p className={classes.resumeDetails} dangerouslySetInnerHTML={{__html: data.resumePageText.Localization.resumePageAboutParaTwo}}></p>
                    <p className={classes.resumeDetails} dangerouslySetInnerHTML={{__html: data.resumePageText.Localization.resumePageAboutParaThree}}></p>
                    <p className={classes.resumeDetails} dangerouslySetInnerHTML={{__html: data.resumePageText.Localization.resumePageAboutParaFour}}></p>
                    {notResumeDownloaded ? 
                    <p className={classes.clickTxt}>{data.resumePageText.Localization.downloadResume}</p>
                    :
                    <p className={classes.clickTxt}>{data.resumePageText.Localization.resumeDownloaded}</p>
                    }
                    {notResumeDownloaded &&
                        <div className={classes.downloadResume}>
                            <a download href={resumePath()} className={classes.downloadBtn} onClick={resumeDownloadedHandler}>{data.resumePageText.Localization.downloadBtnText}</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Resume;