import { useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

import { genericSearch } from "../services/api";

function Home() {

  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function handleSearch(currentPage = 1) {

    setLoading(true);

    try {

      const response = await genericSearch(
        title,
        type,
        currentPage
      );

      setMovies(response.data.search || response.data.Search || []);

      setPage(currentPage);

    } catch(error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <SearchBar
          title={title}
          setTitle={setTitle}
          type={type}
          setType={setType}
          handleSearch={handleSearch}
        />

        {loading && (
          <p className="text-zinc-400">
            Buscando...
          </p>
        )}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-6
          "
        >

          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />
          ))}

        </div>

        {movies.length > 0 && (
          <Pagination
            page={page}
            handleSearch={handleSearch}
          />
        )}

      </div>

    </div>
  );
}

export default Home;