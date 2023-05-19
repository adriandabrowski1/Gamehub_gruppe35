import React from 'react';
import { mygames } from '../games';

const MyFavorites = () => {
  const favoriteGames = mygames.filter(game => game.fav);

  return (
    <div>
      <h2>My Favorites</h2>
      <div>
        {favoriteGames.map(game => (
          <div key={game.id}>
            <h3>{game.title}</h3>
            <img src={game.img} alt={game.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
