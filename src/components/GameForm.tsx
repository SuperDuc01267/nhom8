'use client';

import { useState } from 'react';

const GameForm = () => {
  const [gameName, setGameName] = useState('');
  const [gamePrice, setGamePrice] = useState('');
  const [gameImage, setGameImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Game Added:', { gameName, gamePrice, gameImage });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Game Name:</label>
      <input
        type="text"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
        required
      />
      <label>Game Price:</label>
      <input
        type="text"
        value={gamePrice}
        onChange={(e) => setGamePrice(e.target.value)}
        required
      />
      <label>Game Image URL:</label>
      <input
        type="text"
        value={gameImage}
        onChange={(e) => setGameImage(e.target.value)}
        required
      />
      <button type="submit">Add Game</button>
    </form>
  );
};

export default GameForm;
