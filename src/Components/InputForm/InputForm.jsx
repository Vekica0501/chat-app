import React from 'react';
import styles from './InputForm.module.css';

function InputForm({ onSendMessage, currentUser }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const message = {
      text: event.target.message.value,
      user: {
        name: currentUser.name,
        color: currentUser.color,
      },
    };
    onSendMessage(message);
    event.target.reset();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input autoFocus={true} className={styles.input} type="text" name="message" placeholder="Type a message..." />
        <button className={styles.button} type="submit">Send</button>
      </form>
    </div>
  );
}


export default InputForm;
