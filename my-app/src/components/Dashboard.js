import React from 'react';
import { store, mygames } from '../games';

const Dashboard = () => {
  const featuredGames = store.slice(0, 3);
  const myFavoriteGames = mygames.filter(game => game.fav).slice(0, 2);

  return (
    <div>
      <section>
        <h2>Gameshop</h2>
        <div>
          {featuredGames.map(game => (
            <div key={game.id}>
              <h3>{game.title}</h3>
              <img src={game.img} alt={game.title} />
              <a href={game.link} target="_blank" rel="noopener noreferrer">
                BUY
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>My Games</h2>
        <div>
          {mygames.slice(0, 4).map(game => (
            <div key={game.id}>
              <h3>{game.title}</h3>
              <img src={game.img} alt={game.title} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>My Favorites</h2>
        <div>
          {myFavoriteGames.map(game => (
            <div key={game.id}>
              <h3>{game.title}</h3>
              <img src={game.img} alt={game.title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
