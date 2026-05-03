import './style.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img 
          src={movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
            : '/placeholder.jpg'} 
          alt={movie.title} 
        />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h4>{movie.title}</h4>
          <span className="rating">★ {movie.vote_average?.toFixed(1)}</span>
        </div>
        <p className="year">{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;