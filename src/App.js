import React, { useState, useEffect } from "react";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import Table from "./components/Table";
import PokemonContext from "./PokemonContext";

import {
  Title,
  PageContainer,
  TwoColumnLayout,
  Input,
} from "./components/styles";
import "./App.css";

function App() {
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState(null);
  const [selectedPokemon, selectedPokemonSet] = useState(null);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  if (!pokemon) {
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
      }}>
      <PageContainer>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <Table />
          </div>
          {selectedPokemon && <PokemonInfo />}
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
