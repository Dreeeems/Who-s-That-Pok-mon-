import React, { useState, useEffect, useRef } from "react";
import fetchFromApi from "../utils/fetch";
import Pokemon from "./pokemon";
import Footer from "./footer";

const Home = () => {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [score, setScore] = useState(0);
  const [lang, setLang] = useState("");

  const handleGuess = (guess) => {
    if (guess === true) {
      setScore((prevScore) => prevScore + 1);
    }
    fetchPokemon();
  };

  const isFetched = useRef(false);

  const changeLang = (lan) => {
    setLang(lan);
  };
  const fetchPokemon = async () => {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const data = await fetchFromApi(randomId, lang);
    setCurrentPokemon(data);
  };

  useEffect(() => {
    if (!isFetched.current && lang !== "") {
      fetchPokemon();
      isFetched.current = true;
    }
  }, [lang]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      <div className="flex flex-col items-center flex-grow">
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => changeLang("en")}
            className={`flex items-center space-x-2 px-4 py-2 font-semibold rounded-lg transition duration-200 ${
              lang === "en"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            <img src="/Uk.png" alt="English" className="w-6 h-6" />
            <span>En</span>
          </button>
          <button
            onClick={() => changeLang("fr")}
            className={`flex items-center space-x-2 px-4 py-2 font-semibold rounded-lg transition duration-200 ${
              lang === "fr"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            <img src="/Fr.png" alt="Français" className="w-6 h-6" />
            <span>Fr</span>
          </button>
        </div>

        <h1 className="text-3xl text-white font-bold mb-2">
          Who's That Pokémon?
        </h1>
        <h2 className="text-xl text-white mb-4">Score: {score}</h2>
        {currentPokemon ? (
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
            <Pokemon pokemon={currentPokemon} onGuess={handleGuess} />
          </div>
        ) : (
          <p className="text-white">
            Loading or Select a language... If you change the language while you
            need to guess a Pokémon, please be aware that the name of the
            Pokémon currently to be guessed will remain in the previous
            language.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
