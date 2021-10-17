import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArenaPage from "./ArenaPage";
import LandingPage from "./LandingPage";
import FavouritesPage from "./FavouritesPage";
import ThisPokemon from "./ThisPokemon";

import { Button } from "@material-ui/core";
import styled from "styled-components";

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



function Routing() {
  const [onePokemon, setOnePokemon] = useState(null);
  

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
          <LandingPage setOnePokemon={setOnePokemon} />
        </Route>
        <Route path="/ArenaPage">
          <ArenaPage setOnePokemon={setOnePokemon} />
        </Route>
        <Route path="/FavouritesPage">
          <FavouritesPage setOnePokemon={setOnePokemon} />
        </Route>
        {onePokemon?.map((onePokemon) => (
          <Route path={`/${onePokemon.name}`}>
            <FlexDiv>
              <ThisPokemon thisPokemon={onePokemon} />
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
