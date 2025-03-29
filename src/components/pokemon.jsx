import React, { useState } from "react";

const Pokemon = ({ pokemon, onGuess }) => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [revealed, setRevealed] = useState(false);
  const checkAnwser = (event) => {
    event.preventDefault();
    console.log(guess + " " + pokemon.name);
    if (guess.toLowerCase() === pokemon.name.toLowerCase()) {
      setRevealed(true);
      setMessage("✅ Good Job !!🎉");
      setTimeout("", 2000);
      setRevealed(false);
      onGuess(true);
    } else {
      setRevealed(true);
      setMessage(`❌ Wrong it was ${pokemon.name}`);
      setGuess("");
      setRevealed(false);
      onGuess(false);
    }
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center">
      <img
        className={revealed ? "" : "brightness-0"}
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />

      <div className="flex">
        <input
          type="text"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
          }}
        />
        <button onClick={checkAnwser}> Validate</button>
      </div>
      {message && <p className="mt-2 font-bold">{message}</p>}
    </div>
  );
};

export default Pokemon;
