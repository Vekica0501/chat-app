import React from 'react';
//import MessageBox from '../MessageBox/MessageBox';
import styles from './Messages.module.css';

function Messages({ messages, currentUser }) {
  return (
    <div className={styles.Messages}>
      {messages.map((message, index) => (
        <div key={index}>
          <span style={{ color: message.user.color }}>{message.user.name}: </span>
          <span>{message.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Messages;
