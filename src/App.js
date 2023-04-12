import React, { useState } from "react";
import Messages from "./Components/Messages/Messages";
import InputForm from "./Components/InputForm/InputForm";
import "./App.css";

function App() {
  function generateRandomName() {
    const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
    const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + " " + noun;
  }

  function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

      const [currentUser] = useState({
      name: generateRandomName(),
      color: generateRandomColor()
    });
    const [messages, setMessages] = useState([]);
  
    const handleSendMessage = (message) => {
      setMessages([...messages, message]);
    };

  return (
    <div>
      <div className="app">
        <Messages messages={messages} currentUser={currentUser} />
      </div>
      <br></br>
        <InputForm
          onSendMessage={handleSendMessage}
          currentUser={currentUser}
        />
      
    </div>
  );
}

export default App;
