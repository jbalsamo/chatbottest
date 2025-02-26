import React, { useState } from 'react';
import './Chat.css';

const Chat = ({ messages, setMessages }) => {
  const [message, setMessage] = useState('');

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
            <div className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
