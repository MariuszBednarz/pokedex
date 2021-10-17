import axios from "axios";
import React, { useEffect, useState } from "react";
import ThisPokemon from "./ThisPokemon";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleDiv = styled.div`
  margin-top: 50px;
  text-transform: uppercase;
  font-size: 24px;
`;

function FavouritesPage({ onePokemon }) {
  const [favouritesIDs, setFavouritesIDs] = useState();

  const getIDs = () => {
    axios.get("http://localhost:3000/favourites/").then((response) => {
      setFavouritesIDs(response.id);
    });
  };

  useEffect(() => {
    getIDs();
  }, []);

  return (
    <FlexDiv>
      <TitleDiv>your favourite pokemons</TitleDiv>
      <ThisPokemon onePokemon={onePokemon} key={favouritesIDs}></ThisPokemon>
    </FlexDiv>
  );
}

export default FavouritesPage;
