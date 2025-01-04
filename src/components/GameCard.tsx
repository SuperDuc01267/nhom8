'use client';

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.name} />
      <h3>{game.name}</h3>
      <p>{game.price}</p>
    </div>
  );
};

export default GameCard;
