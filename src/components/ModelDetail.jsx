import { colours } from "../data/colours";

function ModalDetail({ pokemon, onClose }) {
  if (!pokemon) {
    return null; // Pastikan pokemon ada sebelum merender
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="rounded-lg p-8 shadow-lg relative overflow-hidden border-2 border-black" // Tambahkan border-2 border-black jika diinginkan
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: pokemon.color }} // Menggunakan warna pokemon untuk background
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
        >
          &times;
        </button>
        <div className="flex justify-center items-center"> {/* Menggunakan flex dan justify-center untuk menengahkan gambar */}
          <img
            src={pokemon.imageUrl}
            alt={pokemon.name}
            className="max-w-full h-auto w-[200px]" // Pastikan ukuran gambar juga diatur jika perlu
          />
        </div>
        <h2 className="text-2xl font-bold mt-4 text-center">{pokemon.name}</h2>
        <div className="flex justify-center gap-2 mt-2">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-md border-2 border-black text-white text-xs font-semibold"
              style={{ backgroundColor: colours[`${type.toLowerCase()}`] }}
            >
              {type}
            </span>
          ))}
        </div>
        <p className="mt-4 text-gray-950s text-center">{pokemon.description}</p>
      </div>
    </div>
  );
}

export default ModalDetail;