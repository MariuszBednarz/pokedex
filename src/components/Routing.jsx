import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArenaPage from "./ArenaPage";
import LandingPage from "./LandingPage";
import FavouritesPage from "./FavouritesPage";
import ThisPokemon from "./ThisPokemon";

function Routing() {
  const [onePokemon, setOnePokemon] = useState(null);
  console.log(onePokemon);
  return (
    <Router>
      <Link to="/LandingPage">
        <button>Home</button>
      </Link>
      <Link to="/ArenaPage">
        <button>Arena</button>
      </Link>
      <Link to="/FavouritesPage">
        <button>Favourites</button>
      </Link>
      <Switch>
        <Route path="/LandingPage">
          <LandingPage onePokemon={setOnePokemon} />
        </Route>
        <Route path="/ArenaPage">
          <ArenaPage />
        </Route>
        <Route path="/FavouritesPage">
          <FavouritesPage />
        </Route>
        <ThisPokemon onePokemon={onePokemon} />
        {onePokemon?.result.map((onePokemon) => (
          <Route path={`/Pokemon${onePokemon.id}`}>
            <div>{onePokemon.id}</div>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default Routing;
