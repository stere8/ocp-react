import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Dropdown = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <select id="languageDropdown" name="culture" onChange={handleChange} value={language} className="form-control">
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="pl">Polski</option>
    </select>
  );
};

export default Dropdown;