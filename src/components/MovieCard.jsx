import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:scale-105 transition">
      <img
        src={movie.poster !== "N/A" ? movie.poster : "https://placehold.co/300x450?text=No+Image"}
        alt={movie.title}
        className="w-full h-[300px] object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-white">{movie.title}</h2>
        <p className="text-zinc-400">{movie.year}</p>
        <Link
          to={`/details/${movie.type}/${movie.imdbID}`}
          className="inline-block mt-4 text-red-500 hover:text-red-400"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
export default MovieCard;