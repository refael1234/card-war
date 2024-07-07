import React, { useState } from 'react';

export default function HomePage({ setPages, setPlayer }) {
  const [name, setName] = useState("");

  function createPlayer() {
    return {
      name: name,
      wins: 0,
      losses: 0,
      gamesPlayed: 0,
      cardDeck: []
    };
  }

  function isNameValid() {
    return name.trim() !== "";
  }

  function startGame() {
    const isValid = isNameValid();
    if (!isValid) {
      alert("Please enter your name.");
      return;
    }
    const player = createPlayer();
    setPlayer(player);
    setPages(1); // Move to GamePage
  }

  return (
    <div className="home-page">
      <h1>Ready for WAR</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button onClick={startGame} className="start-button">Start</button>
    </div>
  );
}
