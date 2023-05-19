import React from 'react';
import { store } from '../games';

const GameShop = () => {
  return (
    <div>
      <h2>Game Shop</h2>
      <div className="game-list">
        {store.map(game => (
          <div className="game" key={game.id}>
            <img src={game.img} alt={game.title} />
            <h3>{game.title}</h3>
            <p>Released: {game.released}</p>
            <p>Genres: {game.genres.join(', ')}</p>
            <a href={game.link} target="_blank" rel="noopener noreferrer">
              Buy
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameShop;
