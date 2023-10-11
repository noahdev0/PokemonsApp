import  { useContext } from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

export default function Table() {
  const { pokemon, filter, selectedPokemonSet } = useContext(PokemonContext);
  return (
    <table>
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onClick={(pokemon) => selectedPokemonSet(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
}
