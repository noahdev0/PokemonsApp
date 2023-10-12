import React, { useState, useEffect, useReducer } from "react";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import Table from "./components/Table";
import PokemonContext from "./PokemonContext";

import {
  Title,
  PageContainer,
  TwoColumnLayout,
} from "./components/styles";
import "./App.css";
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error("Invalid action type");
  }
};
function App() {
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState(null);
  const [selectedPokemon, selectedPokemonSet] = useState(null);
  const [state, dispatch] = useReducer(pokemonReducer, {
    filter: "",
    pokemon: [],
    selectedPokemon: null,
  });

  useEffect(() => {
    fetch("/pokemon.json")
      .then((resp) => resp.json())
      .then((payload) =>
        dispatch({
          type: "SET_POKEMON",
          payload,
        })
      );
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        filter,
        pokemon,
        selectedPokemon,
        filterSet,
        pokemonSet,
        selectedPokemonSet,
        state,
        dispatch,
      }}>
      <PageContainer>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <Table />
          </div>
           <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
