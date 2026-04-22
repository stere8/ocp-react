import React from 'react';
import '../Styles/Projects.css';
import { useProfileContent } from '../content/profileContent';

const Projects = () => {
  const { projectsPage, projects } = useProfileContent();

  return (
    <div className="container projects-page">
      <section className="hero-section projects-hero">
        <span className="section-kicker">{projectsPage.eyebrow}</span>
        <h1>{projectsPage.title}</h1>
        <p>{projectsPage.intro}</p>
      </section>

      <section className="commercial-anchor-section">
        <article className="commercial-anchor-card">
          <span className="section-kicker">{projectsPage.commercialAnchor.eyebrow}</span>
          <h2>{projectsPage.commercialAnchor.title}</h2>
          <p>{projectsPage.commercialAnchor.summary}</p>
          <ul>
            {projectsPage.commercialAnchor.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="projects-themes">
        {projectsPage.themes.map((theme) => (
          <article key={theme.title} className="projects-theme-card">
            <h2>{theme.title}</h2>
            <p>{theme.description}</p>
          </article>
        ))}
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-body">
              <div className="project-card-header">
                <div>
                  <h2>{project.title}</h2>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <div className="project-signals">
                  {project.signals.map((signal) => (
                    <span key={signal} className="project-signal">
                      {signal}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-story-grid">
                <div className="project-story-block">
                  <h3>{projectsPage.labels.context}</h3>
                  <p>{project.context}</p>
                </div>
                <div className="project-story-block">
                  <h3>{projectsPage.labels.constraints}</h3>
                  <p>{project.constraints}</p>
                </div>
                <div className="project-story-block">
                  <h3>{projectsPage.labels.system}</h3>
                  <p>{project.system}</p>
                </div>
                <div className="project-story-block">
                  <h3>{projectsPage.labels.outcome}</h3>
                  <p>{project.outcome}</p>
                </div>
              </div>

              <div className="project-why-card">
                <h3>{projectsPage.labels.whyItMatters}</h3>
                <p>{project.whyItMatters}</p>
              </div>

              <div className="project-tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.repository && (
              <a href={project.repository} target="_blank" rel="noopener noreferrer">
                {projectsPage.labels.viewRepository}
              </a>
            )}
          </article>
        ))}
      </section>
    </div>
  );
};

export default Projects;
