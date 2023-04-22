import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function PokemonCard(pokemon) {
  return (
    <Card>
      {/* <CardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
