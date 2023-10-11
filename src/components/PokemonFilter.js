import { useContext } from "react";
import { Input } from "./styles";

import PokemonContext from "../PokemonContext";

export default function PokemonFilter() {
  const { filter, filterSet } = useContext(PokemonContext);
  return (
    <Input
      type="text"
      value={filter}
      onChange={(evt) => filterSet(evt.target.value)}
    />
  );
}
