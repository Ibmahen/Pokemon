import { colours } from "../data/colours";

function ModalDetail({ pokemon, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl border-2 border-black p-6 w-[90%] max-w-lg relative shadow-[8px_8px_0_black]">
        <button
          className="absolute top-2 right-2 text-black font-bold text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="text-center">
          <img
            src={pokemon.imageUrl}
            alt={pokemon.name}
            className="w-[200px] mx-auto"
          />
          <h2 className="text-2xl font-bold mt-2">{pokemon.name}</h2>

          <div className="flex justify-center gap-2 mt-2 flex-wrap">
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

          <p className="mt-4 text-sm text-left">{pokemon.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalDetail;
