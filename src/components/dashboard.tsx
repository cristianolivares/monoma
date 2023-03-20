import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Paginator from "./paginator";

interface HomeProps {
  user: string;
}

export interface Pokemon {
  height: number;
  id: string;
  name: string;
  sprites: {
   front_default: string;
  },
  types: pokemonTypes[];
  weight: number;
}

export interface PokePetition {
  count: number;
  next: string;
  results: PokeResults[];
}

interface PokeResults {
  name: string;
  url: string;
}

export interface pokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}
const Home: React.FC<HomeProps> = ({ user }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonUrls, setPokemonUrls] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchPokemonUrls = async () => {
      const response = await axios.get<PokePetition>("https://pokeapi.co/api/v2/pokemon?limit=160&offset=0");
      setPokemonUrls(response.data.results.map((pokemon: PokeResults) => pokemon.url));  
    };
    fetchPokemonUrls();
  }, []);
  
  useEffect(() => {
    const fetchPokemons = async () => {
      const promises = pokemonUrls.map((url) => axios.get(url));
      const responses = await Promise.all(promises);
      const responseData = responses.map((response) => response.data);
      setPokemons(responseData);
    };
    if (pokemonUrls.length > 0) {
      fetchPokemons();
    }
  }, [pokemonUrls]);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="text-5xl">
            {pokemons.length === 0 ? 
            <h1>Cargando...</h1> :
            <Paginator cards={pokemons}></Paginator>
            }
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
