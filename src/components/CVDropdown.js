import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/CVDropdown.css';

const CVDropdown = () => {
    const { t } = useTranslation();

    return (
        <div className="cv-dropdown-container">
            <span className="cv-dropdown__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3.75v10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m8.25 10.5 3.75 3.75 3.75-3.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.5 18.75h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <select
                className="cv-dropdown"
                aria-label={t('pages.header.DownloadDropDown')}
                onChange={(e) => {
                    if (e.target.value) {
                        window.location.href = e.target.value;
                    }
                }}
                defaultValue=""
            >
                <option value="" disabled>
                    {t('pages.header.DownloadDropDown')}
                </option>

                <option value="/doc/Oreste%20Twizeyimana%20%E2%80%94%20Comprehensive%20CV.pdf">{t('pages.header.CVOptions.CV_EN')}</option>
                <option value="/doc/Oreste%20Twizeyimana%20%E2%80%94%20Kompleksowe%20CV__Compress.pdf">{t('pages.header.CVOptions.CV_PL')}</option>
            </select>
        </div>
    );
};

export default CVDropdown;
