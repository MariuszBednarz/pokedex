import React, { useEffect, useState } from "react";
import ThisPokemon from "./ThisPokemon";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import axios from "axios";

function ArenaPage({ onArenaIDs, setOnArenaIDs }) {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;
  const [pokemon1, setPokemon1] = useState();
  const [pokemon2, setPokemon2] = useState();
  const [winner1, setWinner1] = useState(undefined);
  const [winner2, setWinner2] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${onArenaIDs[0]}`)
      .then((response) => {
        setPokemon1(response.data);
      })
      .catch();
    axios
      .get(`${BASE_URL}/${onArenaIDs[1]}`)
      .then((response) => {
        setPokemon2(response.data);
      })
      .catch();
  }, []);

  const handleFight = () => {
    if (onArenaIDs.length === 2) {
      if (
        pokemon1.base_experience * pokemon1.weight >
        pokemon2.base_experience * pokemon2.weight
      ) {
        setWinner1(true);
        setWinner2(false);
        alert(`${pokemon1 ? pokemon1.name : ``} is a winner!`);
      } else {
      }
      setWinner2(true);
      setWinner1(false);
      alert(`${pokemon2 ? pokemon2.name : ``} is a winner!`);
    } else alert(`You need 2 pokemon on arena!`);
  };

  return (
    <Wrapper>
      <TitleDiv>Pokemons on arena</TitleDiv>
      <StyledBtn onClick={handleFight} disabled={onArenaIDs.length !== 2}>
        Fight!
      </StyledBtn>
      <FlexDiv>
        <TitleDiv>
          {winner1 === undefined ? `` : winner1 ? `winner` : `defeated`}
        </TitleDiv>
        <TitleDiv>
          {winner2 === undefined ? `` : winner2 ? `winner` : `defeated`}
        </TitleDiv>
      </FlexDiv>
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
  margin: 50px 60px 50px 60px;

  text-transform: uppercase;
  font-size: 24px;
`;

const StyledBtn = styled(Button)`
  && {
    margin: 5px;
    width: 28%;
    height: 50px;
    font-size: 24px;
    background-color: #fec5bb;
  }
`;
