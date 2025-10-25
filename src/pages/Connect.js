import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";
import emailjs from '@emailjs/browser';
import classes from "./Connect.module.css";
import data from '../localization/localization.json';

const socialMediaAccounts = [
    {
        id: 1,
        socialUrl: 'https://www.instagram.com/adidevsoul_official/',
        socialImage: '../../images/insta.webp',
        socialLabel: `${data.contactPageText.Localization.contactInstaTxt}`
    },
    {
        id: 2,
        socialUrl: 'https://leetcode.com/u/PrashantShakya/',
        socialImage: '../../images/leetcode.png',
        socialLabel: `${data.contactPageText.Localization.contactFaceBookTxt}`
    },
    {
        id: 3,
        socialUrl: 'https://www.linkedin.com/in/prashant-shakya24/',
        socialImage: '../../images/linkedin.png',
        socialLabel: `${data.contactPageText.Localization.contactLinkedinTxt}`
    },
    {
        id: 4,
        socialUrl: 'https://bold.pro/my/prashant-shakya/190r',
        socialImage: '../../images/boldpro.jpg',
        socialLabel: `${data.contactPageText.Localization.contactBoldProTxt}`
    }
]

function Connect() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [designation, setDesignation] = useState('');
    const [message, setPurpose] = useState('');
    const [formSubmit, setFormSubmit] = useState(false);
    const [formError, setFormError] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        const serviceId = 'service_qid2hdu';
        const templateId = 'template_sng7yc3';
        const publicKey = 'xMIRddYKUzgb4rytj';

        const templateParams = {
            from_name: name,
            email: email,
            mobile: mobileNumber,
            to_name: 'Prashant Shakya',
            company: company,
            designation: designation,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                setName('');
                setEmail('');
                setCompany('');
                setMobileNumber('');
                setDesignation('');
                setPurpose('');
                setSubmitting(false);
                const showSuccessMessage = setTimeout(() => {
                    setFormSubmit(true);
                    const hideSuccessMessage = setTimeout(() => {
                        setFormSubmit(false);
                    }, 5000);
                    return () => clearTimeout(hideSuccessMessage);
                });
                return () => clearTimeout(showSuccessMessage);
            })
            .catch((error) => {
                setFormError(true);
                console.log('Error sending email', error);
            })
    }
    return (
        <div className={classes.contactWrapper}>
            <PageHeader
                heading={data.contactPageText.Localization.contactPageHeading}
                subHeading={data.contactPageText.Localization.contactPageSubHeading}
            />
            <div className={classes.contactContainer}>
                <div className={classes.contactWrap}>
                    <form onSubmit={handleSubmit} className={classes.contactForm}>
                        <div className={classes.label}>
                            <label htmlFor="fname">{data.contactPageText.Localization.yourNameLabel} <span>*</span></label>
                        </div>
                        <div className={classes.inputWrap}>
                            <input required type="text" id="fname" name="name" className={classes.formInput} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        <div className={classes.label}>
                            <label htmlFor="email">{data.contactPageText.Localization.yourEmailLabel} <span>*</span></label>
                        </div>
                        <div className={classes.inputWrap}>
                            <input required type="email" id="email" name="email" className={classes.formInput} placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className={classes.label}>
                            <label htmlFor="mobile">{'Mobile Number'} <span>*</span></label>
                        </div>
                        <div className={classes.inputWrap}>
                            <input
                                required
                                type="number"
                                id="mobile"
                                name="mobile"
                                className={classes.formInput}
                                placeholder="Mobile Number"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                onKeyDown={(event) => {
                                    if (mobileNumber.length === 10 && event.keyCode !== 8) {
                                        event.preventDefault();
                                    }
                                }}
                            />
                        </div>
                        <div className={classes.label}>
                            <label htmlFor="cmpny">{data.contactPageText.Localization.yourCompanyLabel} <span>*</span></label>
                        </div>
                        <div className={classes.inputWrap}>
                            <input required type="text" id="cmpny" className={classes.formInput} placeholder="Your company" name="company" value={company} onChange={(e) => setCompany(e.target.value)}></input>
                        </div>
                        <div className={classes.label}>
                            <label htmlFor="dsign">{data.contactPageText.Localization.yourDesignationLabel} <span>*</span></label>
                        </div>
                        <div className={classes.inputWrap}>
                            <input required type="text" id="dsign" className={classes.formInput} placeholder="Your designation" name="designation" onChange={(e) => setDesignation(e.target.value)} value={designation}></input>
                        </div>
                        <div className={classes.label}>
                            <label htmlFor="purps">{data.contactPageText.Localization.yourPurposeofConnect} <span>*</span></label>
                        </div>
                        <div className={classes.inputWrap}>
                            <textarea required type="text" id="purps" className={classes.formInput} placeholder="Your purpose to connect" name="purpose" onChange={(e) => setPurpose(e.target.value)} value={message}></textarea>
                            {formSubmit && !formError &&
                                <p className={classes.successMsg}>{data.contactPageText.Localization.formSuccessMessage}</p>
                            }
                            {formError &&
                                <p className={classes.errorMsg}>{data.contactPageText.Localization.formErrorMessage}</p>
                            }
                        </div>
                        <button type="submit" className={`${classes.submitBtn} ${submitting ? classes.disabledClass : ''}`} disabled={submitting}>
                            {submitting ? `${data.contactPageText.Localization.conatactFormSubmitting}` : `${data.contactPageText.Localization.conatactFormSubmit}`}
                        </button>
                    </form>
                </div>
                <div className={classes.socialWrap}>
                    <div className={classes.socialContainer}>
                        <h2 className={classes.socialMedia}>{data.contactPageText.Localization.contactSocialMediaHeading}</h2>
                        {socialMediaAccounts.map((socialItems) => {
                            return (<Link key={socialItems.id} className={classes.socialItems} to={socialItems.socialUrl} target="_blank">
                                <img className={classes.instaGram} src={socialItems.socialImage} alt=""></img>
                                <p className={classes.socialText}>{socialItems.socialLabel}</p>
                            </Link>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Connect;