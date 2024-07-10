import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import '../Styles/Programming.css'; // Import the CSS file
import { Helmet } from 'react-helmet';

const Programming = () => {
    const { t } = useTranslation();

    return (
        <div className="container hero-section-bis">
            <Helmet>
                <title>Programming | Oracle Consults Portfolio</title>
                <meta name="description" content="Discover the programming expertise of Oreste TWIZEYIMANA, including proficiency in C#, Angular, React, SQL, and more." />
            </Helmet>
            <div className="row">
                <div className="text-center">
                    <h1>{t('programming.title')}</h1>
                    <p>{t('programming.intro')}</p>
                </div>
            </div>
            <div className="row">
                <div className="text-center">
                    <h1>{t('programming.horizonExpansion')}</h1>
                    <p>{t('programming.aficionado')}</p>
                </div>
            </div>
            <div className="row">
                <div className="text-center">
                    <h1>{t('programming.technologies')}</h1>
                    <h3>{t('programming.technicalExpertise')}</h3>
                    <p>{t('programming.expertiseDescription')}</p>
                    <ul>
                        <li><i className="technology">C#</i>
                            <strong className="technology">{t('CSharpSkillHead')}</strong>
                            {t('CSharpSkillContent')}
                        </li>
                        <li><i className="fa-brands fa-windows technology"></i>
                            <strong className="technology">{t('WPFSkillHead')}</strong>
                            {t('WPFSkillContent')}
                        </li>
                        <li><i className="fa-solid fa-database technology"></i>
                            <strong className="technology">{t('EntityFrameworkSkillHead')}</strong>
                            {t('CSharpSkillContent')}
                        </li>
                        <li><i className="fa-solid fa-server technology"></i>
                            <strong className="technology">{t('SQLSkillHead')}</strong>
                            {t('SQLSkillContent')}
                        </li>
                        <li><i className="fa-brands fa-git-alt technology"></i>
                            <strong className="technology">{t('GitSkillHead')}</strong>
                            {t('GitSkillContent')}
                        </li>
                        <li><i className="fa-solid fa-code-branch technology"></i>
                            <strong className="technology">{t('CI_CDPracticesSkillHead')}</strong>
                            {t('CI_CDPracticesSkillContent')}
                        </li>
                        <li><i className="fa-brands fa-html5 technology"></i>
                            <strong className="technology">{t('HTML_CSSSkillHead')}</strong>
                            {t('HTML_CSSSkillContent')}
                        </li>
                        <li><i className="fa-brands fa-react technology"></i>
                            <strong className="technology">{t('ReactJSSkillHead')}</strong>
                            {t('ReactJSSkillContent')}
                        </li>
                        <li><i className="fa-brands fa-angular technology"></i>
                            <strong className="technology">{t('AngularSkillHead')}</strong>
                            {t('AngularSkillContent')}
                        </li>
                        <li><i className="fa-brands fa-python technology"></i>
                            <strong className="technology">{t('DjangoSkillHead')}</strong>
                            {t('DjangoSkillContent')}
                        </li>
                        <li><i className="fa-brands fa-bootstrap technology"></i>
                            <strong className="technology">{t('BootstrapSkillHead')}</strong>
                            {t('BootstrapSkillContent')}
                        </li>
                        <li><i className="fa-brands fa-windows technology"></i>
                            <strong className="technology">{t('ASPNETCoreSkillHead')}</strong>
                            {t('ASPNETCoreSkillContent')}
                        </li>
                        <li><i className="fa-solid fa-pager technology"></i>
                            <strong className="technology">{t('RazorPagesSkillHead')}</strong>
                            {t('RazorPagesSkillContent')}
                        </li>
                        <li><i className="fa-brands fa-reacteurope technology"></i>
                            <strong className="technology">{t('ReactRouterSkillHead')}</strong>
                            {t('ReactRouterSkillContent')}
                        </li>
                        <li><i className="fa-solid fa-font-awesome technology"></i>
                            <strong className="technology">{t('FontAwesomeSkillHead')}</strong>
                            {t('FontAwesomeSkillContent')}
                        </li>
                        <li><i className="fa-solid fa-globe technology"></i>
                            <strong className="technology">{t('react_i18nextSkillHead')}</strong>
                            {t('react_i18nextSkillContent')}
                        </li>
                        <li><i className="fa-solid fa-envelope technology"></i>
                            <strong className="technology">{t('EmailJSSkillHead')}</strong>
                            {t('EmailJSSkillContent')}
                        </li>
                        <li><i className="fa-solid fa-gears technology"></i>
                            <strong className="technology">{t('AgileScrumSkillHead')}</strong>
                            {t('AgileScrumSkillContent')}
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-md-12">
                            <p>I'm always learning and experimenting. If you have a project in mind, or just want to
                                connect<Link className="nav-link" to="/contact">let's connect!</Link> also feel free
                                to <a
                                    href="/docs/CV - Oreste BO+(EN).pdf" download="CV Oreste TWIZEYIMANA">Download my
                                    CV</a> to learn more about my experience and skills.</p>
                        </div>
                        <h1>{t('programming.projectsTitle')}</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                {t('programming.projects', { returnObjects: true }).map((project, index) => (
                    <div key={index} className="col-sm-6 skill-box">
                        <h1><a href={project.repository}>{project.name}</a></h1>
                        <p><strong>Overview:</strong> {project.overview}</p>
                        <p><strong>Description:</strong> {project.description}</p>
                        <p><strong>Key Responsibilities:</strong></p>
                        <ul>
                            {project.keyResponsibilities.map((responsibility, idx) => (
                                <li key={idx}>{responsibility}</li>
                            ))}
                        </ul>
                        <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                        <p><strong>Key Contributions:</strong> {project.keyContributions}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Programming;