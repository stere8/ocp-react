import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Programming.css'; // Import the CSS file

const Programming = () => {
  const { t } = useTranslation();

  return (
    <div className="container hero-section-bis">
      <div className="row">
        <div className="text-center">
          <h1>{t('programming.title')}</h1>
          <p>{t('programming.intro')}</p>
        </div>
      </div>
      <div className="row">
        <div className="text-center">
          <h1>{t('programming.technologies')}</h1>
          <h3>{t('programming.technicalExpertise')}</h3>
          <p>{t('programming.expertiseDescription')}</p>
          <ul>
            <li><i className="fa-brands fa-csharp technology"></i> <strong className="technology">C# (.NET):</strong> Proficient in developing scalable applications using C# and .NET framework.</li>
            <li><i className="fa-brands fa-windows technology"></i> <strong className="technology">WPF:</strong> Skilled in creating rich desktop applications with WPF.</li>
            <li><i className="fa-solid fa-database technology"></i> <strong className="technology">Entity Framework:</strong> Experienced in database interaction and ORM using Entity Framework.</li>
            <li><i className="fa-solid fa-database technology"></i> <strong className="technology">SQL:</strong> Proficient in database design, querying, and optimization using SQL.</li>
            <li><i className="fa-brands fa-git-alt technology"></i> <strong className="technology">Git:</strong> Proficient in version control and collaborative development workflows using Git.</li>
            <li><i className="fa-solid fa-diagram-project technology"></i> <strong className="technology">CI/CD Practices:</strong> Experienced in Continuous Integration and Continuous Deployment practices.</li>
            <li><i className="fa-brands fa-html5 technology"></i> <strong className="technology">HTML/CSS:</strong> Familiar with front-end technologies for creating user interfaces.</li>
            <li><i className="fa-brands fa-vuejs technology"></i> <strong className="technology">Vue.js:</strong> Knowledgeable in developing dynamic web applications using Vue.js.</li>
            <li><i className="fa-brands fa-jira technology"></i> <strong className="technology">Agile/Scrum:</strong> Experienced in Agile practices for efficient project management.</li>
          </ul>
          <div className="row">
            <div className="col-md-12">
              <p>I'm always learning and experimenting. If you have a project in mind, or just want to connect <a href="/ocp-react/src/Pages/Contact">let's connect!</a> also feel free to <a href="/docs/CV - Oreste BO+(EN).pdf" download="CV Oreste TWIZEYIMANA">Download my CV</a> to learn more about my experience and skills.</p>
            </div>
            <h1>{t('programming.projectsTitle')}</h1>
          </div>
        </div>
      </div>
      <div className="row">
        {t('programming.projects', { returnObjects: true }).map((project, index) => (
          <div key={index} className="col-sm-6 skill-box">
            <h1><a href={project.repository}>{project.name}</a></h1>
            <p>{project.description}</p>
            <ul>
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programming;