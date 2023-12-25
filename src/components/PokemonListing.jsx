import { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/AppContext";
import Loading from "./Loading";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";


export default function PokemonListing() {
  const { pokemons, filter, search, modal, setModal, modalIndex, setModalIndex } = useContext(AppContext);
  const filterPokemons = useSelector((state) => state.filteredPokemons);
  const searchPokemons = useSelector((state) => state.searchPokemons);

  return <main className="md:mx-auto md:w-4/5 w-full my-5">
    <div className="grid md:grid-cols-5 grid-cols-2 md:gap-10 gap-3">
      {
        filter ? filterPokemons.map((pokemon, index) => (
          <div key={index} onClick={() => {
            setModalIndex(pokemons.indexOf(pokemon));
            setModal(true);
          }}>
            <PokemonCard pokemon={pokemon} />
          </div>
        )) : search ? searchPokemons.map((pokemon, index) => (
          <div key={index} onClick={() => {
            setModalIndex(pokemons.indexOf(pokemon));
            setModal(true);
          }}>
            <PokemonCard key={index} pokemon={pokemon} />
          </div>
        )) : pokemons.map((pokemon, index) => (
          <div key={index} onClick={() => {
            setModalIndex(pokemons.indexOf(pokemon));
            setModal(true);
          }}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))
      }
    </div>
    {
      modal && <PokemonModal pokemon={pokemons[modalIndex]} />
    }
    {
      pokemons.length === 0 && <Loading />
    }
  </main>;
}