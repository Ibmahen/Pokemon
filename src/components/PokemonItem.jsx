import { colours } from "../data/colours";

function PokemonItem({ pokemon, hovered, setHoveredId, onClick }) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHoveredId(pokemon.id)}
      onMouseLeave={() => setHoveredId(null)}
      className="group relative w-full max-w-[260px] min-h-[360px] p-6 rounded-xl border-2 border-black shadow-[6px_6px_0_black] text-center cursor-pointer transition-transform hover:scale-105 overflow-hidden"
      style={{ backgroundColor: pokemon.color }}
    >
      <div className="flex justify-center items-center h-[200px]">
        <img
          src={pokemon.imageUrl}
          alt={pokemon.name}
          className="w-[180px] h-[180px] object-contain"
        />
      </div>

      <h2 className="text-xl font-bold mt-2">{pokemon.name}</h2>
      <div className="flex justify-center gap-2 mt-2 mb-4 flex-wrap">
        {pokemon.types.map((type, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-md border-2 border-black text-white text-xs font-semibold"
            style={{ backgroundColor: colours[type.toLowerCase()] }}
          >
            {type}
          </span>
        ))}
      </div>

      <div
        className={`
          absolute bottom-0 left-0 w-full bg-white text-sm text-left p-4
          transition-transform duration-300 ease-in-out
          ${hovered ? "translate-y-0" : "translate-y-full"}
          group-hover:translate-y-0
        `}
      >
        <p className="font-medium">Description:</p>
        <p className="text-gray-700">{pokemon.description}</p>
      </div>
    </div>
  );
}

export default PokemonItem;