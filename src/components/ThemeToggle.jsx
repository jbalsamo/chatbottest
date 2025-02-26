import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <div className="theme-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={onToggle}
        />
        <span className="slider round"></span>
      </label>
      <span className="theme-label">{isDarkMode ? 'Dark' : 'Light'}</span>
    </div>
  );
};

export default ThemeToggle;
