import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";
import classes from "./Projects.module.css";

const ProjectsItems = [
    {
        id: 5,
        image: '../../images/boldpro.svg',
        heading: 'Bold.Pro',
        para: '3rd Best Portfolio builder website in the world',
        link: 'https://bold.pro/',
        btnText: 'View Project'
    },
    {
        id: 6,
        image: '../../images/jobhero.png',
        heading: 'Job Hero',
        para: '4th Best resume & coverletter builder website in the world',
        link: 'https://www.jobhero.com/',
        btnText: 'View Project'
    },
    {
        id: 7,
        image: '../../images/flexjobs.svg',
        heading: 'Flex Jobs',
        para: 'Worlds Best Flexible Jobs provider website in the world',
        link: 'https://www.flexjobs.com/',
        btnText: 'View Project'
    },
    {
        id: 8,
        image: '../../images/mightyrecruiter.png',
        heading: 'Mighty Recruiter',
        para: 'Best Recruiter website in the world',
        link: 'https://www.mightyrecruiter.com/',
        btnText: 'View Project'
    },
    {
        id: 1,
        image: '../../images/mpr.png',
        heading: 'My Perfect Resume',
        para: 'Best resume builder website in the world',
        link: 'https://www.myperfectresume.com',
        btnText: 'View Project'
    },
    {
        id: 2,
        image: '../../images/logo.png',
        heading: 'Livecareer',
        para: 'Worlds Top 10 resume builder website',
        link: 'https://www.livecareer.com',
        btnText: 'View Project'
    },
    {
        id: 3,
        image: '../../images/resume-now.png',
        heading: 'Resume Now',
        para: 'Best resume builder website India',
        link: 'https://www.resume-now.com',
        btnText: 'View Project'
    },
    {
        id: 4,
        image: '../../images/zety.png',
        heading: 'Zety',
        para: '5th Best resume builder website in the world',
        link: 'https://www.zety.com',
        btnText: 'View Project'
    },
    {
        id: 9,
        image: '../../images/perfumania.jfif',
        heading: 'Perfumania',
        para: 'Best perfume selling website in the world',
        link: 'https://perfumania.com/',
        btnText: 'View Project'
    },
    {
        id: 10,
        image: '../../images/fortiva.webp',
        heading: 'Fortiva',
        para: 'Best financial consulting website in the world',
        link: 'https://www.myfortiva.com/',
        btnText: 'View Project'
    }, 
    {
        id: 11,
        image: '../../images/bmo.svg',
        heading: 'BMO Harris Bank',
        para: '8th Largest Bank in North America Website',
        link: 'https://www.bmo.com/en-ca/main/personal/',
        btnText: 'View Project'
    },
    {
        id: 12,
        image: '../../images/mypoojabox.png',
        heading: 'My Pooja Box',
        para: 'One of the best Crystal and Pooja items selling website',
        link: 'https://www.bmo.com/en-ca/main/personal/',
        btnText: 'View Project'
    },
    {
        id: 13,
        image: '../../images/2hub.svg',
        heading: '2Hub Travel',
        para: 'Hotel and Travel finder web application',
        link: 'https://2hub.travel/home',
        btnText: 'View Project'
    },
    {
        id: 14,
        image: '../../images/collegedunia.jpg',
        heading: 'College Dunia',
        para: 'College Information and Admissions info wesbite',
        link: 'https://collegedunia.com/',
        btnText: 'View Project'
    },
    {
        id: 15,
        image: '../../images/zoutons.png',
        heading: 'Zoutons',
        para: 'Coupons and Deals Finder website in India',
        link: 'https://zoutons.com/',
        btnText: 'View Project'
    },
    {
        id: 16,
        image: '../../images/carhp.jfif',
        heading: 'Car HP',
        para: 'Car Buying and Selling Dealers wesbite',
        link: 'https://www.carhp.com/',
        btnText: 'View Project'
    },
]

function Projects () {
    return (
        <div className={classes.projectsWrapper}>
            <PageHeader
                heading={'Projects 💼'}
                subHeading={'Amazing Projects Done Till Date'}
            />
            <div className={classes.projectsContainer}>
                <div className={classes.projectsWrap}>
                    {ProjectsItems.map((items) => {
                        return (
                            <div className={classes.projectsCard} key={items.id}>
                                <div className={classes.projectImage}>
                                    <img src={items.image} alt=""/>
                                </div>
                                <div className={classes.content}>
                                    <h3 className={classes.cardHeading}>{items.heading}</h3>
                                    <p className={classes.cardPara}>{items.para}</p>
                                    <Link to={items.link} target="_blank" className={classes.cardLink}>{items.btnText}</Link>
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