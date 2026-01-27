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
                <option value="/doc/Oreste Twizeyimana — .NET Backend Developer General.pdf">CV EN .Net</option>
                <option value="/doc/Oreste Twizeyimana —PL .NET Backend Developer General.pdf">CV PL .Net</option>
                <option value="/doc/Oreste TWIZEYIMANA - Python Backend Developer General.pdf">CV EN Python</option>
                <option value="/doc/Oreste TWIZEYIMANA -PL Python Backend Developer General.pdf">CV PL Python</option>
            </select>
        </div>
    );
};

export default CVDropdown;