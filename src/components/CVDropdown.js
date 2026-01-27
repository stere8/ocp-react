import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/CVDropdown.css';

const CVDropdown = () => {
    const { t } = useTranslation();

    return (
        <div className="cv-dropdown-container">
            <select
                className="cv-dropdown"
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

                <option value="/doc/CV_NET_EN.pdf">{t('pages.header.CVOptions.CV_NET_EN')}</option>
                <option value="/doc/CV_NET_PL.pdf">{t('pages.header.CVOptions.CV_NET_PL')}</option>
                <option value="/doc/CV_PYTHON_EN.pdf">{t('pages.header.CVOptions.CV_PYTHON_EN')}</option>
                <option value="/doc/CV_PYTHON_PL.pdf">{t('pages.header.CVOptions.CV_PYTHON_PL')}</option>
            </select>
        </div>
    );
};

export default CVDropdown;
