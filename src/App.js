import React, { useEffect, useRef, useState } from "react";
import Messages from "./Components/Messages/Messages";
import InputForm from "./Components/InputForm/InputForm";
import "./App.css";

function generateRandomName() {
  const adjectives = [
    "autumn",
    "hidden",
    "bitter",
    "misty",
    "silent",
    "empty",
    "dry",
    "dark",
    "summer",
    "icy",
    "delicate",
    "quiet",
    "white",
    "cool",
    "spring",
    "winter",
    "patient",
    "twilight",
    "dawn",
    "crimson",
    "wispy",
    "weathered",
    "blue",
    "billowing",
    "broken",
    "cold",
    "damp",
    "falling",
    "frosty",
    "green",
    "long",
    "late",
    "lingering",
    "bold",
    "little",
    "morning",
    "muddy",
    "old",
    "red",
    "rough",
    "still",
    "small",
    "sparkling",
    "throbbing",
    "shy",
    "wandering",
    "withered",
    "wild",
    "black",
    "young",
    "holy",
    "solitary",
    "fragrant",
    "aged",
    "snowy",
    "proud",
    "floral",
    "restless",
    "divine",
    "polished",
    "ancient",
    "purple",
    "lively",
    "nameless",
  ];
  const nouns = [
    "waterfall",
    "river",
    "breeze",
    "moon",
    "rain",
    "wind",
    "sea",
    "morning",
    "snow",
    "lake",
    "sunset",
    "pine",
    "shadow",
    "leaf",
    "dawn",
    "glitter",
    "forest",
    "hill",
    "cloud",
    "meadow",
    "sun",
    "glade",
    "bird",
    "brook",
    "butterfly",
    "bush",
    "dew",
    "dust",
    "field",
    "fire",
    "flower",
    "firefly",
    "feather",
    "grass",
    "haze",
    "mountain",
    "night",
    "pond",
    "darkness",
    "snowflake",
    "silence",
    "sound",
    "sky",
    "shape",
    "surf",
    "thunder",
    "violet",
    "water",
    "wildflower",
    "wave",
    "water",
    "resonance",
    "sun",
    "wood",
    "dream",
    "cherry",
    "tree",
    "fog",
    "frost",
    "voice",
    "paper",
    "frog",
    "smoke",
    "star",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + " " + noun;
}

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: generateRandomName(),
    color: generateRandomColor(),
  });

  const drone = useRef(null);

  const memberRef = useRef(member);

  useEffect(() => {
    memberRef.current = member;
  }, [member]);

  useEffect(() => {
    drone.current = new window.Scaledrone("8Sx5ZHyoAxHHvKGF", {
      data: member,
    });

    drone.current.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      setMember((prevMember) => ({
        ...prevMember,
        id: drone.current.clientId,
      }));
    });

    const room = drone.current.subscribe("observable-room");

    const handleMessage = (data, member) => {
      setMessages((prevMessages) => [...prevMessages, { member, text: data }]);
    };

    room.on("data", handleMessage);

    return () => {
      room.off("data", handleMessage);
      drone.current.unsubscribe("observable-room");
    };
  }, []);

  

  const handleSendMessage = (message) => {
    if (drone.current && drone.current.publish) {
      drone.current.publish({
        room: "observable-room",
        message,
      });
    }
  };

  return (
    <div>
      <div className="app">
        <Messages messages={messages} currentUser={member} />
      </div>
      <br></br>
      <InputForm onSendMessage={handleSendMessage} currentUser={member} />
    </div>
  );
}

export default App;
