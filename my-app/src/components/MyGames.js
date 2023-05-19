import React from 'react';
import { mygames } from '../games';

const MyGames = () => {
  return (
    <div>
      <h2>My Games</h2>
      <div>
        {mygames.map(game => (
          <div key={game.id}>
            <h3>{game.title}</h3>
            <img src={game.img} alt={game.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGames;
