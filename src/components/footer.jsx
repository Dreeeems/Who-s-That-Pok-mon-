import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="flex justify-center items-center gap-2 p-4 text-neutral-700 dark:text-neutral-200 ">
        <a
          className="text-neutral-800 dark:text-neutral-400 hover:text-neutral-50 transition-all"
          href="https://github.com/Dreeeems"
        >
          Made by Dreems
        </a>
        <a
          className="text-neutral-800 dark:text-neutral-400 hover:text-neutral-50 transition-all"
          href="https://pokeapi.co/"
        >
          With PokeAPI
        </a>
      </div>
    </footer>
  );
};

export default Footer;
