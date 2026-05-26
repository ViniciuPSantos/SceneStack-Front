function SearchBar({
    title,
    setTitle,
    type,
    setType,
    handleSearch
}){
    return(
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <input 
                type="text"
                placeholder="Buscar filmes ou séries..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
            />

        <div className="flex gap-3">
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="flex-1 sm:flex-none bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white"
            >
                <option value="movie">Filmes</option>
                <option value="series">Séries</option>
            </select>

            <button
                onClick={() => handleSearch(1)}
                className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold text-white">
                Buscar
            </button>

            </div>

        </div>
    );
}

export default SearchBar;