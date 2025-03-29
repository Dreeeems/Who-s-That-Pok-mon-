import React, { useState, useEffect, useRef } from "react";
import fetchFromApi from "../utils/fetch";
import Pokemon from "./pokemon";
import Footer from "./footer";

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
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      <div className="flex flex-col items-center flex-grow">
        <h1 className="text-3xl text-white font-bold mb-2">
          Who's That Pokémon?
        </h1>
        <h2 className="text-xl text-white mb-4">Score: {score}</h2>
        {currentPokemon ? (
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
            <Pokemon pokemon={currentPokemon} onGuess={handleGuess} />
          </div>
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
