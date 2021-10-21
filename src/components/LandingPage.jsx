import React from "react";
import PokemonDatabase from "./PokemonDatabase";

function LandingPage({setOnePokemon,favouritesIDs, onArenaIDs }) {
    return (
      <PokemonDatabase favouritesIDs={favouritesIDs} setOnePokemon={setOnePokemon} onArenaIDs={onArenaIDs}/>
    );
  }
  
  export default LandingPage;