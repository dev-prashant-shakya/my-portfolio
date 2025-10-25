import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import classes from "./Technologies.module.css";

const ProjectsItems = [
    {
        id: 1,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
        heading: 'HTML 5',
    },
    {
        id: 2,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
        heading: 'CSS 3',
    },
    {
        id: 3,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        heading: 'JavaScript',
    },
    {
        id: 4,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        heading: 'Bootstrap 3, 4',
    }, 
    {
        id: 5,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        heading: 'SCSS / SASS',
    },
    {
        id: 6,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg',
        heading: 'JQuery',
    },
    {
        id: 7,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
        heading: 'React JS',
    },
    {
        id: 8,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
        heading: 'Next JS',
    },
]

function Projects () {
    return (
        <div className={classes.technologyWrapper}>
            <PageHeader 
                heading={'Tech Stack 💻'} 
                subHeading={'List of Technologies In My Stack'}
            />
            <div className={classes.techHeaderContainer}>
                <div className={classes.techWrap}>
                    {ProjectsItems.map((items) => {
                        return (
                            <div className={classes.techCard} key={items.id}>
                                <div className={classes.techImage}>
                                    <img src={items.image} alt=""/>
                                </div>
                                <div className={classes.content}>
                                    <h3 className={classes.cardHeading}>{items.heading}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Projects;