import { useContext } from "react";
import { Input } from "./styles";

import PokemonContext from "../PokemonContext";

export default function PokemonFilter() {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <Input
      type="text"
      value={filter}
      onChange={(evt) =>
        dispatch({ type: "SET_FILTER",
        payload: evt.target.value })
      }
    />
  );
}
