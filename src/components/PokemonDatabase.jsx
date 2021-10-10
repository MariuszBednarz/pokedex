import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayPokemon from "./DisplayPokemon";

function PokeList() {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit, offset]);

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
    <div>
      <div>
        <input type="text" onChange={handleChange} />
      </div>
      <button disabled={offset <= 0} onClick={handlePrev}> {offset <= 0 ? `First Page` : `Prev`} </button>
      <button disabled={offset >= 150} onClick={handleNext}> {offset >= 150 ? `Last Page` : `Next`} </button>

      <DisplayPokemon pokemon={pokemon} inputValue={inputValue} />
    </div>
  );
}

export default PokeList;
