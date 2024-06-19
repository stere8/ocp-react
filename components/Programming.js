import React from 'react';

const Programming = () => (
  <div className="container hero-section-bis">
    <div className="row">
      <div className="text-center">
        <h1>My Programming Journey</h1>
        <p>As a passionate and experienced .NET developer...</p>
      </div>
    </div>
    <div className="row">
      <div className="text-center">
        <h1>Technologies</h1>
        <h3>Technical Expertise</h3>
        <p>My expertise spans across a spectrum of technologies and tools:</p>
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
            <p>I'm always learning and experimenting. If you have a project in mind, or just want to connect <a href="/contact">let's connect!</a> also feel free to <a href="/docs/CV - Oreste BO+(EN).pdf" download="CV Oreste TWIZEYIMANA">Download my CV</a> to learn more about my experience and skills.</p>
          </div>
          <h1>Featured Projects</h1>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 skill-box">
        <h1><a href="https://github.com/stere8/RTTrackers">RT Trackers</a></h1>
        <p>The <code>stere8/rttrackers</code> repository is a Flask-based web application designed for tracking stock prices and weather conditions...</p>
        {/* Add more project details here */}
      </div>
      <div className="col-sm-6 skill-box">
        <h1><a href="https://github.com/stere8/dreamndine">DreamNDine</a></h1>
        <p>The <code>stere8/dreamndine</code> is a comprehensive web application...</p>
        {/* Add more project details here */}
      </div>
    </div>
  </div>
);

export default Programming;