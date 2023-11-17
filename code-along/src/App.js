// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const generateGreeting = () => {
    setGreeting(`Hello, ${name || 'Stranger'}!`);
  };

  return (
    <div className="App">
      <h1>Simple Greeting App</h1>
      <div>
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        <button onClick={generateGreeting}>Generate Greeting</button>
      </div>
      <p>{greeting}</p>
    </div>
  );
}

export default App;
