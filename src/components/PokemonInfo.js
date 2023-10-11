import PokemonType from "../PokimenType";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";
const PokemonInfo = () => {
  const {
    selectedPokemon: {
      name: { english },
      base,
    },
  } = useContext(PokemonContext);

  return (
    <div>
      <h2>{english}</h2>
      <table>
        <tbody>
          {Object.keys(base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;
