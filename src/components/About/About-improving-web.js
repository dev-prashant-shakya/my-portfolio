import React, {useState} from "react";
import classes from "./AboutImprovingWeb.module.css";
import data from "../../localization/localization.json";

const cardMap = [
    {
        id: 1,
        icon: '🌐',
        heading: `${data.aboutPageText.Localization.aboutImprovingWebDevHeading}`,
        paragraph: `${data.aboutPageText.Localization.aboutImprovingWebDevPara}`,
    },
    {
        id: 2,
        icon: '🛠️',
        heading: `${data.aboutPageText.Localization.aboutImprovingUiArchitectureHeading}`,
        paragraph: `${data.aboutPageText.Localization.aboutImprovingUiArchitecturePara}`
    },
    {
        id: 3,
        icon: '🚀',
        heading: `${data.aboutPageText.Localization.aboutImprovingReactHeading}`,
        paragraph: `${data.aboutPageText.Localization.aboutImprovingReactPara}`
    },
    {
        id: 4,
        icon: '💼',
        heading: `${data.aboutPageText.Localization.aboutImprovingProductManagementHeading}`,
        paragraph: `${data.aboutPageText.Localization.aboutImprovingProductManagementPara}`
    }
]

function ImprovingWeb () {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = (itemId) => () => {
        setIsShowMore({ ...isShowMore, [itemId] : !isShowMore[itemId] });
    }
    return (
        <div className={classes.improvingWeb}>
            <h2 className={classes.improveSecHeading}>{data.aboutPageText.Localization.aboutImprovingWebHeading}</h2>
            <div className={classes.ImprovingWebContainer}>
                <p className={classes.improveSecPara} dangerouslySetInnerHTML={{__html: data.aboutPageText.Localization.aboutImprovingWebSubText}}></p>
                <div className={classes.improvingCardWrapper}>
                    {cardMap.map((cardItems) => {
                        return (
                            <div className={classes.card + (isShowMore[cardItems.id] ? ` ${classes.overflow}` : '')} key={cardItems.id}>
                                <span className={classes.icons}>{cardItems.icon}</span>
                                <h3 className={classes.cardHeading}>{cardItems.heading}</h3>
                                <p className={classes.cardPara + (isShowMore[cardItems.id] ? ` ${classes.collapsed}` : '')}>{cardItems.paragraph}</p>
                                <span className={classes.readMore} onClick={toggleReadMoreLess(cardItems.id)}>{isShowMore[cardItems.id] ? `${data.aboutPageText.Localization.aboutBtnReadLess}` : `${data.aboutPageText.Localization.aboutBtnReadMore}`}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default ImprovingWeb;