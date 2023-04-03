import React from 'react';
import styles from './MessageBox.module.css';

function MessageBox({ message, currentUser }) {
  const { text, user } = message;
  const isCurrentUser = user.name === currentUser.name;

  const messageStyle = {
    backgroundColor: user.color,
    color: "white",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    float: isCurrentUser ? "right" : "left",
    // Use the appropriate class name based on whether this is the current user's message or not
    className: isCurrentUser ? styles.messageBoxCurrentUser : styles.MessageBox,
  };

  return (
    <div className={styles.MessageBox} style={messageStyle}>
      <div>{user.name}</div>
      <div>{text}</div>
    </div>
  );
}

export default MessageBox;
