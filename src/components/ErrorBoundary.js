import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import StatusPage from './StatusPage';

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught:", error, errorInfo);
    }

    render() {
        const { t } = this.props;

        if (this.state.hasError) {
            return (
                <StatusPage
                    eyebrow={t('pages.error.eyebrow')}
                    title={t('pages.error.runtimeTitle')}
                    message={t('pages.error.runtimeMessage')}
                    className="status-page--error"
                >
                    <button type="button" className="btn primary-cta" onClick={() => window.location.reload()}>
                        {t('pages.error.reloadCta')}
                    </button>
                    <Link to="/" className="btn btn-outline-primary">
                        {t('pages.error.homeCta')}
                    </Link>
                </StatusPage>
            );
        }
        return this.props.children;
    }
}

export default withTranslation()(ErrorBoundary);
