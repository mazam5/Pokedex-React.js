import { configureStore, createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: { allPokemons: [], filteredPokemons: [], searchPokemons: [] },
  reducers: {
    setPokemons(state, action) {
      state.allPokemons = action.payload;
    },
    filterPokemons(state, action) {
      if (action.payload === "all") {
        state.filteredPokemons = state.allPokemons;
      } else {
        state.filteredPokemons = state.allPokemons.filter((pokemon) =>
          pokemon.types.find((slot) => slot.type.name === action.payload.types),
        );
      }
    },
    searchPokemons(state, action) {
      state.searchPokemons = state.allPokemons.filter(
        (pokemon) =>
          pokemon.name.includes(action.payload) ||
          pokemon.id === +action.payload,
      );
    },
  },
});

export const actions = pokemonSlice.actions;

export const store = configureStore({
  reducer: pokemonSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
