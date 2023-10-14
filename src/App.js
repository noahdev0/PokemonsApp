import React, { useState, useEffect, useReducer } from "react";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import Table from "./components/Table";
// import PokemonContext from "./PokemonContext";
import { useSelector } from "react-redux";
//redux store
import { createStore } from "redux";
import { Provider ,useDispatch, useDispatch } from "react-redux";

import { Title, PageContainer, TwoColumnLayout } from "./components/styles";
import "./App.css";

const pokemonReducer = (
  state = {
    filter: "",
    pokemon: [],
    selectedPokemon: null,
  },
  action
) => {
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
      return state;
  }
};

const store = createStore(pokemonReducer);

function App() {
  // const [filter, filterSet] = useState("");
  // const [pokemon, pokemonSet] = useState(null);
  // const [selectedPokemon, selectedPokemonSet] = useState(null);
  
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  

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
  );
}

export default () => <Provider store={store}>App</Provider>;
