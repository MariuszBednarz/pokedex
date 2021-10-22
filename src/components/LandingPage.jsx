import React from "react";
import PokemonDatabase from "./PokemonDatabase";

function LandingPage({setOnePokemon,favouritesIDs, onArenaIDs, setOnArenaIDs }) {
    return (
      <PokemonDatabase favouritesIDs={favouritesIDs} setOnePokemon={setOnePokemon} onArenaIDs={onArenaIDs} setOnArenaIDs={setOnArenaIDs}/>
    );
  }
  
  export default LandingPage;