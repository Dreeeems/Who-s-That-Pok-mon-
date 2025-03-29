import React, { useState, useEffect, useRef } from "react";
import fetchFromApi from "../utils/fetch";

const Home = () => {
  const [currentPokemon, setCurrentPokemon] = useState(null);
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
    <div>
      <h1 className="text-lg">Who's That Pokémon?</h1>
      {currentPokemon ? (
        <div>
          <h2>{currentPokemon.name}</h2>
          <img className="brightness-0"
            src={currentPokemon.sprites.other["official-artwork"].front_default}
            alt={currentPokemon.name}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}


    </div>
  );
};

export default Home;
