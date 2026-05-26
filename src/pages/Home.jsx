import { useState } from "react";

import NavBar from "../components/NavBar";
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

      <NavBar />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">

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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
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