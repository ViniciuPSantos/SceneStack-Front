function Pagination({
  page,
  handleSearch
}) {

  return (

    <div className="flex justify-center items-center gap-6 mt-10">

      <button
        disabled={page === 1}
        onClick={() => handleSearch(page - 1)}
        className="
          bg-zinc-800
          px-4
          py-2
          rounded-lg
          disabled:opacity-50
        "
      >
        ⬅
      </button>

      <span className="text-white">
        Página {page}
      </span>

      <button
        onClick={() => handleSearch(page + 1)}
        className="
          bg-zinc-800
          px-4
          py-2
          rounded-lg
        "
      >
        ➡
      </button>

    </div>
  );
}

export default Pagination;