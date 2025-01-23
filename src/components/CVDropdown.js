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
                    {t('DownloadCV')}
                </option>
                <option value="/src/doc/CV EN.pdf">CV EN</option>
                <option value="/src/doc/CV PL.pdf">CV PL</option>
            </select>
        </div>
    );
};

export default CVDropdown;