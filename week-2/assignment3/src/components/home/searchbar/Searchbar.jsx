
import "./style.css"

const Searchbar = ({ search, setSearch, fetchMoviesBySearch }) => {

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      fetchMoviesBySearch()
    }
  }

  return (
    <section>

      <div className="searchbar-container">
        <div className="search-content">
          <h2>Welcome.</h2>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>

        <div className="searchbar">
          <input type="text" placeholder="Search for a movie, tvshow...." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleSearch} />
          <button onClick={fetchMoviesBySearch}>Search</button>
        </div>

      </div>
    </section>
  )
}

export default Searchbar