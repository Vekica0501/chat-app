import React from 'react';
import MessageBox from '../MessageBox/MessageBox';
import styles from './Messages.module.css';

function Messages({ messages, currentUser }) {
  return (
    <div className={styles.Messages}>
      {messages.map((message, index) => (
        <MessageBox
          key={index}
          message={message}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}

export default Messages;
