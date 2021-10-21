import React from "react";
import ThisPokemon from "./ThisPokemon";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const TitleDiv = styled.div`
  margin-top: 50px;
  text-transform: uppercase;
  font-size: 24px;
`;

function ArenaPage({ onArenaIDs, setOnArenaIDs }) {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;



 return (
  <Wrapper>
  <TitleDiv>Pokemons on arena</TitleDiv>
  <FlexDiv>
    {onArenaIDs.map((id) => (
      <ThisPokemon
        thisPokemon={{ url: `${BASE_URL}/${id}` }}
        onArenaIDs={onArenaIDs}
        setOnArenaIDs={setOnArenaIDs}
      ></ThisPokemon>
    ))}
  </FlexDiv>
</Wrapper>
 );
}

export default ArenaPage;