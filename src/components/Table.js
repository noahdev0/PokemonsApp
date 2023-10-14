import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import PokemonRow from "./PokemonRow";
// import PokemonContext from "../PokemonContext";

export default function Table() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const filter = useSelector((state) => state.filter);
  // const {state: { pokemon, filter },dispatch,} = useContext(PokemonContext);
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
              onClick={(pokemon) =>
                dispatch({ type: "SET_SELECTED_POKEMON", payload: pokemon })
              }
            />
          ))}
      </tbody>
    </table>
  );
}
