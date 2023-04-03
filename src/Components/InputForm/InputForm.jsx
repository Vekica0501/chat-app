import React from 'react';
import styles from './InputForm.module.css';

function InputForm({ onSendMessage }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const message = {
        text: event.target.message.value,
        user: {
          name: "User Name", // Replace with random name
          color: "#RRGGBB", // Replace with random color
        }
      };
      onSendMessage(message);
      event.target.reset();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.form}></div>
        <input  className = {styles.input} type="text" name="message" placeholder="Type a message..." />
        <button className={styles.button} type="submit">Send</button>
      </form>
    );
  }

export default InputForm;
