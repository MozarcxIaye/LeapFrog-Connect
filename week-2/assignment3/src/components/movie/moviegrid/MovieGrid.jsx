
import MovieCard from '../moviecard/MovieCard';
import "./style.css"

const MovieGrid = ({ movies, title }) => {
  return (
    <section className="popular-container">
      <div className="section-header">
        <h2>{title}</h2>
        <div className="underline"></div>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;