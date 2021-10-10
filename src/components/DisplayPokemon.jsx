import React from "react";
import ThisPokemon from "./ThisPokemon";
import styled from "styled-components";

const DisplayWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const DisplayPokemon = ({ pokemon, inputValue }) => {
  return (
    <DisplayWrapper>
      {inputValue === undefined
        ? pokemon.map((val, idx) => {
          console.log('niefiltruje')
            return <ThisPokemon key={idx} thisPokemon={val} />;
          })
        : pokemon
            .filter((pokemon) => {
              return pokemon.name.includes(inputValue);
            })
            .map((val, idx) => {
              console.log('filtruje')
            
              return <ThisPokemon key={idx} thisPokemon={val} />;
            })}
    </DisplayWrapper>
  );
};

export default DisplayPokemon;
