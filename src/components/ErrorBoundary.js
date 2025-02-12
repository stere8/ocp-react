import React from 'react';
import {withTranslation} from 'react-i18next';

class ErrorBoundary extends React.Component {
    state = {hasError: false}; // Add this line

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught:", error, errorInfo);
    }

    render() {
        const {t} = this.props;

        if (this.state.hasError) {
            return <div className="error-fallback">{t('pages.error.fallbackMessage')}</div>;
        }
        return this.props.children;
    }
}

export default withTranslation()(ErrorBoundary);