import React, { useState } from "react";

const Pokemon = ({ pokemon, onGuess }) => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [revealed, setRevealed] = useState(false);
  const checkAnswer = (event) => {
    event.preventDefault();
    console.log(guess + " " + pokemon.name);
    if (guess.toLowerCase() === pokemon.name.toLowerCase()) {
      setRevealed(true);
      setMessage("✅ Good Job !!🎉");
      setGuess("");
      setTimeout(() => {
        setMessage("");
        setRevealed(false);
        onGuess(true);
      }, 2000);
    } else {
      setRevealed(true);
      setMessage(`❌ Wrong it was ${pokemon.name}`);
      setGuess("");
      setTimeout(() => {
        setMessage("");
        setRevealed(false);
        onGuess(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg shadow-md w-full max-w-xs sm:max-w-md">
      <div className="w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
        <img
          className={`transition-all duration-500 ${
            revealed ? "brightness-100" : "brightness-0"
          }`}
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </div>

      <form onSubmit={checkAnswer} className="flex flex-col gap-3 mt-4 w-full">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="px-4 py-2 border rounded-lg text-center text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          placeholder="Who's that Pokémon?"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
        >
          Validate
        </button>
      </form>

      {message && (
        <p
          className={`mt-3 text-lg sm:text-xl font-semibold ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Pokemon;
