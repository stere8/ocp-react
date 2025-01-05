import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Projects.css';

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('pages.projects.ProjectList', { returnObjects: true });

  return (
    <div className="container">
        <section className="hero-section">
            <h1>{t('pages.projects.Title')}</h1>
            <p>{t('pages.projects.Description')}</p>
        </section>
        <div className="projects-grid">
            {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.Title}</h2>
            <p>{project.Overview}</p>
            <h4>{t('pages.projects.KeyFeatures')}</h4>
            <ul>
              {project.KeyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <h4>{t('pages.projects.Technologies')}:</h4>
            <ul>
              {project.Technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a href={project.Repository} target="_blank" rel="noopener noreferrer">
              {t('pages.projects.ViewOnGitHub')}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
