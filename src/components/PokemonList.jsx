import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import useFetch from "../hooks/useFetch";
import Grid from "@mui/material/Grid";

export default function PokemonList() {
  const {
    data: pokemons,
    isLoading,
    error,
  } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0");
  const [nextPage, setNextPage] = useState([]);
  const [previousPage, setPreviousPage] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);

  if (isLoading) return <h1>loading..</h1>;
  if (error) return <h1>error</h1>;

  return (
    <Grid container spacing={2}>
      {pokemons.results.map((pokemon) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}
