import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemons/:id" element={<PokemonDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
