import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import useFetch from "../hooks/useFetch";
import "../styles/pokemon.css";
import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  const { data: pokemonData, isLoading, error } = useFetch(`${pokemon.url}`);
  const id = pokemon.url.split("/")[6];

  const type =
    pokemonData && pokemonData.types ? [pokemonData.types[0].type.name] : [];
  console.log(type);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  if (isLoading) return <h1><CircularProgress></CircularProgress></h1>;
  if (error) return <h1>error..</h1>;
  return (
    <>
      {pokemonData && (
        <Card class={type}>
          <img src={imageUrl}></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Link to={`/pokemons/${id}`}>{pokemon.name}</Link>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              #{id}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
