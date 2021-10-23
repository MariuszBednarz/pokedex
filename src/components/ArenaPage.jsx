import React, {  useState } from "react";
import ThisPokemon from "./ThisPokemon";
import styled from "styled-components";
import { Button } from "@material-ui/core";

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

const StyledBtn = styled(Button)`
  && {
    margin: 5px;
    width: 28%;
    height: 50px;
    font-size: 24px;
    background-color: #fec5bb;
  }
`;

function ArenaPage({ onArenaIDs, setOnArenaIDs }) {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;
  const [arenaLimit, setArenaLimit] = useState(0)
  const [winner, setWinner] = useState(null)

const handleFight = () => {

};

  return (
    <Wrapper>
      <TitleDiv>Pokemons on arena</TitleDiv>
      <StyledBtn onClick={handleFight} disabled={arenaLimit !== 2}>Fight!</StyledBtn>

      <FlexDiv>
        {onArenaIDs.map((id) => (
          <ThisPokemon
            thisPokemon={{ url: `${BASE_URL}/${id}` }}
            onArenaIDs={onArenaIDs}
            setOnArenaIDs={setOnArenaIDs}
            arenaLimit={arenaLimit}
            setArenaLimit={setArenaLimit}
          ></ThisPokemon>
        ))}
      </FlexDiv>

    </Wrapper>
  );
}

export default ArenaPage;
