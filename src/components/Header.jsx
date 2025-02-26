import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = ({ isDarkMode, onToggleTheme }) => {
  return (
    <header className="header">
      <h1>Innovation Group Chatbot</h1>
      <div className="header-right">
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </div>
    </header>
  );
};

export default Header;
