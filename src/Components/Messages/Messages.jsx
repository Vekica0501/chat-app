import React from 'react';
import styles from './Messages.module.css';

function Messages({ messages, currentUser }) {
  return (
    <div className={styles.Messages}>
      {messages.map((message, index) => (
        <div key={index}>
          <span style={{ color: message.member.clientData.color }}>{message.member.clientData.username}: </span>
          <span>{message.text.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Messages;