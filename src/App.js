import React, { useState } from 'react';
import Messages from './Components/Messages/Messages';
import InputForm from './Components/InputForm/InputForm';
import "./App.css";




function App() {
  function generateRandomName() {
    const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank'];
    const index = Math.floor(Math.random() * names.length);
    return names[index];
  }

  function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  const [messages, setMessages] = useState([]);
  const currentUser = {
    name: generateRandomName(),
    color: generateRandomColor(),
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    
    <div className='app'>
      <Messages messages={messages} currentUser={currentUser} />
      <InputForm onSendMessage={handleSendMessage} currentUser={currentUser}/>
    </div>
  );
}


export default App;


