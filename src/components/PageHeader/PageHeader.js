import { React } from "react";
import classes from './PageHeader.module.css';

function PageHeader (props) {
    return(
        <div className={classes.pageHeader}>
            <div className={classes.pageContainer}>
                <h1 className={classes.pageHeading}>{props.heading}</h1>
                <p className={classes.pagePara}>{props.subHeading}</p>
            </div>
        </div>
    )
};
export default PageHeader;