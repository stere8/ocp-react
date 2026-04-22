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
              </div>

              <div className="project-visual-flow" aria-label={`${project.title} flow`}>
                <article className="project-visual-node">
                  <span className="project-visual-label">{projectsPage.labels.context}</span>
                  <p>{project.context}</p>
                </article>
                <span className="project-visual-arrow" aria-hidden="true" />
                <article className="project-visual-node project-visual-node--accent">
                  <span className="project-visual-label">{projectsPage.labels.system}</span>
                  <p>{project.system}</p>
                </article>
                <span className="project-visual-arrow" aria-hidden="true" />
                <article className="project-visual-node">
                  <span className="project-visual-label">{projectsPage.labels.outcome}</span>
                  <p>{project.outcome}</p>
                </article>
              </div>

              <div className="project-detail-grid">
                <div className="project-story-block">
                  <h3>{projectsPage.labels.constraints}</h3>
                  <p>{project.constraints}</p>
                </div>

                <div className="project-signals-panel">
                  {project.signals.map((signal) => (
                    <article key={signal} className="project-signal-card">
                      <span className="project-signal-card__eyebrow">{project.subtitle}</span>
                      <strong>{signal}</strong>
                    </article>
                  ))}
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
