import { useEffect, useState } from "react";
import pokemonData from "../data/pokemon.json";
import PokemonItem from "./PokemonItem";
import ModalDetail from "./ModelDetail";

function PokemonList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState(pokemonData);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const allTypes = [...new Set(pokemonData.flatMap((p) => p.types))];

  useEffect(() => {
    let result = pokemonData;

    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (typeFilter.length > 0) {
      result = result.filter((p) =>
        typeFilter.every((t) => p.types.includes(t))
      );
    }

    setFilteredPokemon(result);
  }, [searchTerm, typeFilter]);

  const toggleType = (type) => {
    setTypeFilter((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Search & Filter Centered */}
      <div className="flex flex-col items-center gap-4 mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="border border-black px-4 py-2 rounded-lg w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {allTypes.map((type) => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`px-3 py-1 text-sm border-2 border-black rounded-md font-semibold ${
                typeFilter.includes(type)
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Pokémon Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredPokemon.map((pokemon) => (
          <PokemonItem
            key={pokemon.id}
            pokemon={pokemon}
            hovered={hoveredId === pokemon.id}
            setHoveredId={setHoveredId}
            onClick={() => setSelectedPokemon(pokemon)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedPokemon && (
        <ModalDetail
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
}

export default PokemonList;
