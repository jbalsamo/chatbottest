import React, { useState, useEffect } from 'react';
import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "How are you?",
      sender: "bot"
    }
  ]);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleNewChat = () => {
    setMessages([
      {
        id: 1,
        text: "How are you?",
        sender: "bot"
      }
    ]);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : ''}`}>
      <Header isDarkMode={isDarkMode} onToggleTheme={handleThemeToggle} />
      <div className="main-content">
        <Sidebar onNewChat={handleNewChat} />
        <div className="content-area">
          <Chat messages={messages} setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
}

export default App;
