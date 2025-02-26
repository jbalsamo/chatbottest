import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onNewChat }) => {
  return (
    <div className="sidebar">
      <button className="new-chat-button" onClick={onNewChat}>
        + New Chat
      </button>
    </div>
  );
};

export default Sidebar;
