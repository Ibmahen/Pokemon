import { useState } from "react";

import pokemonJSON from "../../data/pokemon.json";
import PokemonItem from "../PokemonItem/PokemonItem";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);

  return (
    <div>
      <div className="list-pokemon">
        {pokemons.map((item) => (
          <PokemonItem key={item.id} pokemon={item} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;