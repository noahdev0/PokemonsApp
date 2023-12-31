import PropTypes from "prop-types";
import PokemonType from "../PokimenType";
const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={() => onClick(pokemon)}>More Information</button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRow;
