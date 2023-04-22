import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/pokemonDetails.css";
import CircularProgress from '@mui/material/CircularProgress';
import { Card, CardContent, Typography } from "@mui/material";

export function PokemonDetails() {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const { data: pokemonData, isLoading, error } = useFetch(`${url}`);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const type =
    pokemonData && pokemonData.types ? [pokemonData.types[0].type.name] : [];
  console.log(type);
  if (isLoading) return <h1><CircularProgress></CircularProgress></h1>;
  if (error) return <h1>error..</h1>;

  return (
    <div className="center-container">
      <Card class={type} sx={{ maxWidth: 345 }}>
        <CardContent>
          <img src={imageUrl} alt={pokemonData.name} />
          <Typography variant="h3" component="div">
            {pokemonData.name}
          </Typography>
          <Typography variant="h6" component="div">
            <strong>Abilities:</strong>{" "}
            {pokemonData.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </Typography>
          <Typography variant="h6" component="div">
            <strong>Type:</strong>{" "}
            {pokemonData.types.map((type) => type.type.name).join(", ")}
          </Typography>
          <div className="pokemon-stats">
            <Typography variant="h6" component="div">
              <strong>Stats:</strong>
            </Typography>
            <div className="stat-labels">
              <Typography variant="h6" component="div">
                HP:
              </Typography>
              <Typography variant="h6" component="div">
                Attack:
              </Typography>
              <Typography variant="h6" component="div">
                Defense:
              </Typography>
              <Typography variant="h6" component="div">
                Special Attack:
              </Typography>
              <Typography variant="h6" component="div">
                Special Defense:
              </Typography>
              <Typography variant="h6" component="div">
                Speed:
              </Typography>
            </div>
            <div className="stat-values">
              {pokemonData.stats.map((stat) => (
                <Typography
                  key={stat.stat.name}
                  variant="h6"
                  component="div"
                >
                  {stat.base_stat}
                </Typography>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PokemonDetails;
