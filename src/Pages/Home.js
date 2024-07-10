import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Home.css';
import cvEng from '../doc/CV EN.pdf';
import cvPL from '../doc/CV PL.pdf';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Home = () => {
    const { t } = useTranslation();
    const [downloadLink, setDownloadLink] = useState('');

    const handleChange = (event) => {
        setDownloadLink(event.target.value);
    };

    const skills = t('Skills', { returnObjects: true });

    return (
        <div className="container">      
        <Helmet>
            <title>Oracle Consults Portfolio | Oreste TWIZEYIMANA</title>
            <meta name="description" content="Oracle Consults Portfolio: Showcasing the programming skills and expertise of Oreste TWIZEYIMANA, an experienced developer proficient in C#, Angular, React, SQL, and more." />
            <meta name="keywords" content="Oracle Consults, Oreste TWIZEYIMANA, Programming, Developer, Portfolio, C#, Angular, React, SQL, Django, Flask" />
        </Helmet>
            <div className="row hero-section">
                <div className="col-md-12 text-center">
                    <h1>{t('CraftingTechnicalSolutionsHeading')}</h1>
                    <p className="lead">{t('FromCodeToCommunicationSubheading')}</p>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h1>{t('WelcomeToMyPortfolio')}</h1>
                        <p>{t('InterestInMyWork')}</p>
                        <p>{t('DownloadCV')}
                            <select id="languageDropdown" name="culture" onChange={handleChange} value={downloadLink} className="form-control">
                                <option value="">{t('SelectCV')}</option>
                                <option value={cvEng}>{t('EnglishCV')}</option>
                                <option value={cvPL}>{t('PolishCV')}</option>
                            </select>
                            {downloadLink && (
                                <a href={downloadLink} download="Oreste TWIZEYIMANA CV">
                                    <Button color="primary" className="mt-2">
                                        {t('Download')}
                                    </Button>
                                </a>
                            )}
                        </p>
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
    );
};

export default Home;