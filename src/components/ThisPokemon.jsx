import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";

const P = styled.p`
  font-size: 18px;
  padding: 5px;
  text-transform: uppercase;
  color: #6b544f;
`;

const Gleam = styled.div`
  transition: 0.3s;
  background-color: white;
  opacity: 0.3;
  width: 25vw;
  height: 100px;
  position: absolute;
  transform: skewY(35deg) translate(0px, 100px);
`;

const StyledBtn = styled(Button)`
  && {
    margin: 5px;
    width: 28%;
    height: 50px;
    font-size: 10px;
    background-color: #fec5bb;
  }
`;
const StyledBtnIsFav = styled(Button)`
  && {
    margin: 5px;
    width: 28%;
    height: 50px;
    font-size: 10px;
    background-color: #ff806a;

    &:hover {
      background-color: #fb4f30;
    }
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: #f1b1a6 15px 15px 25px;
    background-color: #e9f3ed;
  }
  &:hover ${Gleam} {
    height: 150px;
    opacity: 0.4;
    transform: SkewY(35deg) translate(0px, -150px);
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
  const [isFavourite, setIsFavourite] = useState(false);

  const getPokemon = (url) => {
    axios
      .get(url)
      .then((response) => {
        setOnePokemon(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getPokemon(thisPokemon?.url);
  }, [thisPokemon?.url]);

  const addToFavouritesHandle = () => {
    setIsFavourite(true);
    axios
      .post("http://localhost:3000/favourites/", {
        id: `${onePokemon.id}`,
      })
      .then()
      .catch(console.log("error"));
  };

  const removeFromFavouritesHandle = () => {
    setIsFavourite(false);
    console.log("usuwa z ulub.");
  };

  const addToArenaHandle = () => {
    axios
      .post("http://localhost:3000/arena/", {
        id: `${onePokemon.id}`,
      })
      .catch(console.log("error"));
  };

  return (
    <TileWrap onePokemon={onePokemon} key={onePokemon.id}>
      <P>
        #{onePokemon.id} {onePokemon.name}
      </P>
      <img
        width="35%"
        height="35%"
        src={onePokemon.sprites.front_default}
        alt=""
      />
      <FeaturesWrap>
        <Features>Height: {onePokemon.height}</Features>
        <Features>Base Exp: {onePokemon.base_experience}</Features>
        <Features>Weight: {onePokemon.weight}</Features>
        <Features>Ability: {onePokemon.abilities[0].ability.name}</Features>
      </FeaturesWrap>
      <Gleam></Gleam>
      <FlexDiv>
        {isFavourite ? (
          <StyledBtnIsFav
            onClick={removeFromFavouritesHandle}
            variant="contained"
          >
            Remove from favourites
          </StyledBtnIsFav>
        ) : (
          <StyledBtn onClick={addToFavouritesHandle} variant="contained">
            Add to favourites
          </StyledBtn>
        )}

        <StyledBtn onClick={addToArenaHandle} variant="contained">
          Send to arena
        </StyledBtn>
        <StyledBtn
          onClick={() => {
            history.push(`/${onePokemon.name}`);
          }}
          variant="contained"
        >
          Details
        </StyledBtn>
      </FlexDiv>
    </TileWrap>
  );
};

export default ThisPokemon;
