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
        id: 1,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/htmx/htmx-original.svg',
        heading: 'HTMX',
    },
    {
        id: 1,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        heading: 'Tailwind CSS',
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
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chakraui/chakraui-plain-wordmark.svg',
        heading: 'Chakra UI',
    },
    {
        id: 4,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
        heading: 'Material UI',
    },
    {
        id: 4,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original-wordmark.svg',
        heading: 'Chart Js',
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
    {
        id: 9,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
        heading: 'Node JS',
    },
    {
        id: 10,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
        heading: 'MongoDB',
    },
    {
        id: 11,
        image: "../../images/Zod.svg",
        heading: 'ZOD',
    },
    {
        id: 12,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
        heading: 'Jest',
    },
    {
        id: 13,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
        heading: 'GIT',
    },
    {
        id: 13,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
        heading: 'GitHub',
    },
    {
        id: 13,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-plain-wordmark.svg',
        heading: 'Jira',
    },
    {
        id: 13,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg',
        heading: 'Bitbucket',
    },
    {
        id: 14,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
        heading: 'NPM',
    },
    {
        id: 15,
        image: '../../images/Accessibility.svg',
        heading: 'Accessibility',
    },
    {
        id: 16,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
        heading: 'CI/CD Jenkins',
    },
    {
        id: 16,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain-wordmark.svg',
        heading: 'Wordpress',
    },
    {
        id: 16,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain-wordmark.svg',
        heading: 'AZURE',
    },
    {
        id: 16,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg',
        heading: 'Three Js',
    },
    {
        id: 16,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg',
        heading: 'Cypress',
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