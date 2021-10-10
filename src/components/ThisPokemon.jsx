import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router";

const P = styled.p`
  font-size: 18px;
  padding: 5px;
  text-transform: uppercase;
  color: #6b544f;
`;

const TileWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vw;
  width: 25vw;
  background-color: #d8e2dc;
  align-items: center;
  justify-content: center;
  margin: 3vw;
  transition: 0.2s;
  box-shadow: #f1b1a6 5px 5px 15px;
  border-radius: 20px;
  color: #6b544f;

  &:hover {
    transform: scale(1.05);
    box-shadow: #f1b1a6 15px 15px 25px;
    background-color: #e9f3ed;
  }
`;

const FeaturesWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Features = styled.p`
  width: 40%;
  margin: 5px;
  padding: 2px;
  font-size: 12px;
  text-transform: uppercase;
`;

const ThisPokemon = ({ thisPokemon }) => {
  const [onePokemon, setOnePokemon] = useState({
    name: "",
    sprites: {
      front_default: "",
    },
    abilities: [{ ability: { name: "" } }],
  });
  const history = useHistory();

  const getPokemon = (url) => {
    axios
      .get(url)
      .then((response) => {
        setOnePokemon(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemon(thisPokemon.url);
  }, [thisPokemon.url]);

  return (
    <TileWrap
      onePokemon={onePokemon}
      key={onePokemon.id}
      onClick={() => history.push(`/Pokemon#${onePokemon.id}`)}
    >
      <P>
        #{onePokemon.id} {onePokemon.name}
      </P>
      <img
        width="50%"
        height="50%"
        src={onePokemon.sprites.front_default}
        alt=""
      />
      <FeaturesWrap>
        <Features>Height: {onePokemon.height}</Features>
        <Features>Base Exp: {onePokemon.base_experience}</Features>
        <Features>Weight: {onePokemon.weight}</Features>
        <Features>Ability: {onePokemon.abilities[0].ability.name}</Features>
      </FeaturesWrap>
    </TileWrap>
  );
};

export default ThisPokemon;
