import React from 'react';
import '../Styles/Projects.css';
import profileContent from '../content/profileContent';

const Projects = () => {
  const { projectsPage, projects } = profileContent;

  return (
    <div className="container projects-page">
      <section className="hero-section projects-hero">
        <span className="section-kicker">{projectsPage.eyebrow}</span>
        <h1>{projectsPage.title}</h1>
        <p>{projectsPage.intro}</p>
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
                <h2>{project.title}</h2>
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
                  <h3>Problem</h3>
                  <p>{project.problem}</p>
                </div>
                <div className="project-story-block">
                  <h3>System</h3>
                  <p>{project.system}</p>
                </div>
                <div className="project-story-block">
                  <h3>Impact</h3>
                  <p>{project.impact}</p>
                </div>
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
                View on GitHub
              </a>
            )}
          </article>
        ))}
      </section>
    </div>
  );
};

export default Projects;
