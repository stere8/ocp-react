import React, { useState } from 'react';

const Dropdown = () => {
  const [language, setLanguage] = useState('en-US');

  const handleChange = (event) => {
    setLanguage(event.target.value);
    // Add logic to change language
  };

  return (
    <select id="languageDropdown" name="culture" onChange={handleChange} value={language} className="form-control">
      <option value="en-US">English</option>
      <option value="es">Español</option>
      <option value="fr-FR">Français</option>
      <option value="pl-PL">Polski</option>
    </select>
  );
};

export default Dropdown;
