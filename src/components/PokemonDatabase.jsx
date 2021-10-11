import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayPokemon from "./DisplayPokemon";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const btnStyle = { margin: "10px", width: "150px", backgroundColor:"#d8e2dc" }

function PokeList({ setOnePokemon }) {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(15);
  let [offset, setOffset] = useState(0);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}}`
      )
      .then((response) => {
        console.log(response.data.results);
        setPokemon(response.data.results);
        setOnePokemon(response.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit, offset, setOnePokemon]);

  const handlePrev = () => {
    if (offset === 0) {
      return;
    }
    if (offset !== 135) {
      setLimit(15);
    }
    setOffset(offset - 15);
  };

  const handleNext = () => {
    if (offset >= 150) {
      return;
    }
    if (offset === 135) {
      setLimit(1);
    }
    if (offset !== 135) {
      setLimit(15);
    }

    setOffset((offset += 15));
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <TextField
      style={{ marginTop: "40px" }}
        variant="outlined"
        placeholder="search for your pokemon"
        type="text"
        onChange={handleChange}
      />
      <div style={{ padding: "20px" }}>
        <Button
          variant="contained"
          style={btnStyle}
          disabled={offset <= 0}
          onClick={handlePrev}
        >
          {" "}
          {offset <= 0 ? `First Page` : `Prev`}{" "}
        </Button>
        <Button
          variant="contained"
          style={btnStyle}
          disabled={offset >= 150}
          onClick={handleNext}
        >
          {" "}
          {offset >= 150 ? `Last Page` : `Next`}{" "}
        </Button>
      </div>

      <DisplayPokemon pokemon={pokemon} inputValue={inputValue} />
    </Wrapper>
  );
}

export default PokeList;
