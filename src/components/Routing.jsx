import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArenaPage from "./ArenaPage";
import LandingPage from "./LandingPage";
import FavouritesPage from "./FavouritesPage";
import ThisPokemon from "./ThisPokemon";

import { Button } from "@material-ui/core";
import styled from "styled-components";

function Routing() {
  const [onePokemon, setOnePokemon] = useState(null);
  const [favouritesIDs, setFavouritesIDs] = useState(undefined);
  const [onArenaIDs, setOnArenaIDs] = useState(undefined);

  const getFavouritesIDs = () => {
    axios.get("http://localhost:3000/favourites/").then((response) => {
      setFavouritesIDs(response.data.map(({ id }) => +id));
    });
  };

  const getArenaIDs = () => {
    axios.get("http://localhost:3000/arena/").then((response) => {
      setOnArenaIDs(response.data.map(({ id }) => +id));
    });
  };

  useEffect(() => {
    getFavouritesIDs();
    getArenaIDs();
  }, []);

  if (favouritesIDs === undefined) {
    return null;
  }

  if (onArenaIDs === undefined) {
    return null;
  }

  return (
    <Router>
      <Nav>
        <L to="/LandingPage">
          <StyledBtn variant="contained">*Pokedex*</StyledBtn>
        </L>
        <L to="/ArenaPage">
          <StyledBtn variant="contained">Arena</StyledBtn>
        </L>
        <L to="/FavouritesPage">
          <StyledBtn variant="contained">Favourites</StyledBtn>
        </L>
      </Nav>
      <Switch>
        <Route path="/LandingPage">
          <LandingPage
            setOnePokemon={setOnePokemon}
            setFavouritesIDs={setFavouritesIDs}
            favouritesIDs={favouritesIDs}
            setOnArenaIDs={setOnArenaIDs}
            onArenaIDs={onArenaIDs}
          />
        </Route>
        <Route path="/ArenaPage">
          <ArenaPage setOnArenaIDs={setOnArenaIDs} onArenaIDs={onArenaIDs} />
        </Route>
        <Route path="/FavouritesPage">
          <FavouritesPage
            setFavouritesIDs={setFavouritesIDs}
            favouritesIDs={favouritesIDs}
          />
        </Route>
        {onePokemon?.map((onePokemon) => (
          <Route path={`/${onePokemon.name}`}>
            <FlexDiv>
              <ThisPokemon
                thisPokemon={onePokemon}
                setFavouritesIDs={setFavouritesIDs}
                favouritesIDs={favouritesIDs}
                setOnArenaIDs={setOnArenaIDs}
                onArenaIDs={onArenaIDs}
              />
              <L to="/LandingPage">
                <StyledBtn variant="contained">go back</StyledBtn>
              </L>
            </FlexDiv>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default Routing;

const StyledBtn = styled(Button)`
  && {
    margin: 0 20vw 0 0;
    margin: 20px;
    width: 200px;
    font-size: 24px;
    background-color: #fec5bb;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 150px;
  background-color: #f8edeb;
  box-shadow: black 0 0 20px;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const L = styled(Link)`
  text-decoration: none;
`;
