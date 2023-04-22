import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import useFetch from "../hooks/useFetch";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: pokemons,
    isLoading,
    error,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${(currentPage - 1) * 15}`);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (isLoading) return <h1>loading..</h1>;
  if (error) return <h1>error</h1>;

  return (
    <>
      <Grid container spacing={2}>
        {pokemons.results.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <Button variant="contained" disabled={currentPage === 1} onClick={handlePreviousPage}>
          Previous Page
        </Button>
        <Button variant="contained" disabled={!pokemons.next} onClick={handleNextPage} style={{ marginLeft: "1rem" }}>
          Next Page
        </Button>
      </div>
    </>
  );
}
