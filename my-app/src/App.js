import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MyGames from './components/MyGames';
import MyFavorites from './components/MyFavorites';
import GameShop from './components/GameShop';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/mygames">My Games</Link>
            </li>
            <li>
              <Link to="/favourites">My Favorites</Link>
            </li>
            <li>
              <Link to="/gameshop">Game Shop</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Dashboard} />
        <Route path="/mygames" component={MyGames} />
        <Route path="/favourites" component={MyFavorites} />
        <Route path="/gameshop" component={GameShop} />
      </div>
    </Router>
  );
};

export default App;
