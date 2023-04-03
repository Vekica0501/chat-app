import React, { useState } from 'react';
import Messages from './Components/Messages/Messages';
import InputForm from './Components/InputForm/InputForm';

function generateRandomColor() {
  // Generate a random color in hex format
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + color.padStart(6, '0'); // Add leading zeros if needed
}

function generateRandomName() {
  // Define an array of possible names
  const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank'];
  // Generate a random index into the names array
  const index = Math.floor(Math.random() * names.length);
  // Return the name at the random index
  return names[index];
}

function App() {
  const [messages, setMessages] = useState([]);
  const currentUser = {
    name: generateRandomName(),
    color: generateRandomColor(),
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="App">
      <Messages messages={messages} currentUser={currentUser} />
      <InputForm onSendMessage={handleSendMessage} currentUser={currentUser} />
    </div>
  );
}

export default App;


