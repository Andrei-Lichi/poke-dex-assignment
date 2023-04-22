import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import useFetch from "../hooks/useFetch";

export default function PokemonList() {
  const { data: pokemons, isLoading, error } = useFetch("?limit=15&offset=0");
  const [nextPage, setNextPage] = useState([]);
  const [previousPage, setPreviousPage] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);

  if (isLoading) return <h1>loading..</h1>;
  if (error) return <h1>error</h1>;

  return (
    <div>
      {pokemons.results.map((pokemon) => (
        // <PokemonCard pokemon={pokemon}></PokemonCard>
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// function PokemonList() {
//   const [pokemonList, setPokemonList] = useState([]);

//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//       .then(response => response.json())
//       .then(data => {
//         setPokemonList(data.results);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>List of Pokemons</h2>
//       <div className="pokemon-list">
//         {pokemonList.map(pokemon => (
//           <div key={pokemon.name} className="pokemon-card">
//             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`} alt={pokemon.name} />
//             <h3>{pokemon.name}</h3>
//             <p>This is {pokemon.name}, a Pokemon in the Pokedex.</p>
//             <a href={pokemon.url}>View Details</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PokemonList;
