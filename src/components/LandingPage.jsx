import React from "react";
import PokeList from "./PokemonDatabase";

function LandingPage({setOnePokemon}) {
    return (
      <PokeList setOnePokemon={setOnePokemon}/>
    );
  }
  
  export default LandingPage;