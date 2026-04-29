import '../Styles/StatusPage.css';

const StatusPage = ({ eyebrow, title, message, children, className = '' }) => (
  <div className={`container status-page ${className}`.trim()}>
    <section className="status-page__card">
      <span className="section-kicker">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{message}</p>
      {children ? <div className="status-page__actions">{children}</div> : null}
    </section>
  </div>
);

export default StatusPage;
