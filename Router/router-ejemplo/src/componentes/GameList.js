import React from 'react';
import { Link } from 'react-router-dom';

const games = [
  { id: 1, name: 'The Legend of Zelda: Breath of the Wild' },
  { id: 2, name: 'Super Mario Odyssey' },
  { id: 3, name: 'Animal Crossing: New Horizons' }
];

function GameList() {
  return (
    <ul className="game-list">
      {games.map((game) => (
        <li key={game.id}>
          <Link to={`/games/${game.id}`} className="game-link">{game.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GameList;

  