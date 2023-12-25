import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl, imagesUrl, limit } from "./constants";
import { AppContext } from "./context/AppContext";
// components
import Filterings from "./components/Filterings";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PokemonListing from "./components/PokemonListing";
// redux
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";

function App() {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState();
  const pokemons = useSelector((state) => state.allPokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(`${baseUrl}${limit}`);
        const pokemonList = response.data.results;
        const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
          const detailsResponse = await axios.get(baseUrl + "/" + pokemon.name);
          const { id, name, types, stats } = detailsResponse.data;
          const simplifiedPokemon = {
            id,
            name,
            stats,
            types,
          };
          const pokemonImages = await axios.get(imagesUrl + detailsResponse.data.id + ".svg");
          const pokemonDetails = {
            ...simplifiedPokemon,
            image: pokemonImages.data,
          };
          return pokemonDetails;
        });
        const allPokemonDetails = await Promise.all(pokemonDetailsPromises);
        dispatch(actions.setPokemons(allPokemonDetails));
      } catch (error) {
        console.error("Error fetching Pokemons:", error.message);
      }
    };
    fetchPokemons();
  }, [dispatch]);


  return (
    <AppContext.Provider value={{ pokemons, filter, setFilter, search, setSearch, modal, setModal, modalIndex, setModalIndex }}>
      <Header />
      <Filterings />
      <PokemonListing />
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
