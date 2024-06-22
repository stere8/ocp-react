import React from 'react';
import {useTranslation} from 'react-i18next';
import './Home.css';

const Home = () => {
    const {t} = useTranslation();

    const skills = t('Skills', {returnObjects: true});

    return (
        <div className="container">
            <div className="row hero-section">
                <div className="col-md-12 text-center">
                    <h1>{t('CraftingTechnicalSolutionsHeading')}</h1>
                    <p className="lead">{t('FromCodeToCommunicationSubheading')}</p>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h1>{t('WelcomeToMyPortfolio')}</h1>
                        <p>{t('InterestInMyWork')}</p>
                        <p>{t('DownloadCV')} <a href="/docs/CV - Oreste BO+(EN).pdf"
                                                download="CV Oreste TWIZEYIMANA">{t('DownloadCV')}</a></p>
                        <p>{t('ShapingYourVision')}</p>
                        <div className="skills-section">
                            {Object.keys(skills).map(category => (
                                <div key={category} className="skill-box">
                                    <h3>{t(category)}</h3>
                                    <ul>
                                        {skills[category].map(skill => (
                                            <li key={skill}>{t(skill)}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <p>{t('SeekingCollaboration')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Home;