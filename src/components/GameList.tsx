import GameCard from '@/components/GameCard';

interface Game {
  id: number;
  name: string;
  price: string;
  image: string;
}

const games: Game[] = [
  { id: 1, name: 'Game 1', price: '$30', image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Game 2', price: '$20', image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Game 3', price: '$50', image: 'https://via.placeholder.com/200' },
];

const GameList = () => {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
