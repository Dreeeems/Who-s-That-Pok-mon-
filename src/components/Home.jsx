import React, { useState, useEffect, useRef } from "react";
import fetchFromApi from "../utils/fetch";
import Pokemon from "./pokemon";

const Home = () => {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [score, setScore] = useState(0);
  const handleGuess = (guess) => {
    if (guess === true) {
      setScore((prevScore) => prevScore + 1);
    }
    fetchPokemon();
  };

  const isFetched = useRef(false);
  const fetchPokemon = async () => {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const data = await fetchFromApi(randomId);
    setCurrentPokemon(data);
  };

  useEffect(() => {
    if (!isFetched.current) {
      fetchPokemon();
      isFetched.current = true;
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg">Who's That Pokémon?</h1>
      <h2 className="text-lg">Score {score}</h2>
      {currentPokemon ? (
        <div className="flex flex-col items-center">
          <Pokemon pokemon={currentPokemon} onGuess={handleGuess} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
