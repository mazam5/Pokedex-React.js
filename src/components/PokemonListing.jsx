// import PropTypes from 'prop-types'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";


export default function PokemonListing() {
  const { pokemons, filter, search } = useContext(AppContext);
  const filterPokemons = useSelector((state) => state.filteredPokemons);
  const searchPokemons = useSelector((state) => state.searchPokemons);


  return <main className="md:mx-auto md:w-4/5 w-full my-5">
    <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12">
      {
        filter ? filterPokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        )) : search ? searchPokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        )) : pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))
      }
    </div>
    {
      pokemons.length === 0 && <div className="mx-auto md:p-48">
        <p className="text-center text-xl">Did you know?</p>
        <p className="p-3 bg-gradient-to-t from-yellow-200 to-yellow-500 text-3xl">Pokémon is short for &quot;Pocket Monsters&quot; in Japanese. The franchise was created by Satoshi Tajiri and Ken Sugimori and was first introduced by Nintendo, Game Freak, and Creatures in 1996.</p>
      </div>
    }
  </main>;
}