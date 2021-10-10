import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArenaPage from "./ArenaPage";
import LandingPage from "./LandingPage";
import FavouritesPage from "./FavouritesPage";
import ThisPokemon from "./ThisPokemon";

import { Button } from "@material-ui/core";
import styled from "styled-components";

const Nav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100vw;
height: 150px;
background-color: #f8edeb ;
box-shadow: black 0 0 20px;
`;

const styles = { margin: "0", width: "200px", fontSize: "24px", backgroundColor: "#fec5bb"}

function Routing() {
  const [onePokemon, setOnePokemon] = useState(null);
  console.log(onePokemon);
  return (
    <Router>
      <Nav>
      <Link style={{textDecoration: "none", margin: "0 20vw 0 0 "}} to="/LandingPage">
        <Button style={styles} variant="contained" >*Pokedex*</Button>
      </Link>
      <Link style={{textDecoration: "none"}} to="/ArenaPage">
        <Button style={styles} variant="contained" >Arena</Button>
      </Link>
      <Link style={{textDecoration: "none"}} to="/FavouritesPage">
        <Button style={styles} variant="contained" >Favourites</Button>
      </Link>
      </Nav>
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
