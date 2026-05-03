import './style.css'

const SearchResults = ({ query, results }) => {
  if (results.length === 0) return null;

  return (
    <div className="results-container">
      <div className="results-wrapper">
        <div className="results">
          <span>Search Results for <strong>{query}</strong></span>
          <span className="line"></span>
        </div>

        <div className="results-list">
          {results.map((movie) => (
            <div key={movie.id} className="item">
              <img 
                src={movie.poster_path 
                  ? `https://image.tmdb.org/t/p/w92${movie.poster_path}` 
                  : '/placeholder.png'} 
                alt={movie.title} 
                className="poster"
              />
              <div className="item-info">
                <h4>{movie.title}</h4>
                <p>{movie.release_date.slice(0, 4)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchResults;