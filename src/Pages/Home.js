import { useTranslation } from 'react-i18next';
import '../Styles/Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    const { t } = useTranslation();
    const heroSection = t('pages.home.HeroSection', { returnObjects: true });
    const services = t('pages.home.ServicesSection.Cards', { returnObjects: true });

    return (
        <div className="container">
            <section className="hero-section">
                <h1>{heroSection.Title}</h1>
                <p className="lead">{heroSection.Subtitle}</p>
                <div className="cta-buttons">
                    <Button
                        href="https://cal.com/t.oreste"
                        target="_blank"
                        className="primary-cta"
                    >
                        {heroSection.ScheduleButton}
                    </Button>
                    <Button
                        as={Link}
                        to="/contact"
                        variant="outline-primary"
                    >
                        {heroSection.ContactButton}
                    </Button>
                </div>
            </section>

            <section className="services-section">
                <h2>{t('pages.home.ServicesSection.Title')}</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <i className={`fa ${service.Icon}`}></i>
                            <h3>{service.Title}</h3>
                            <p>{service.Description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;