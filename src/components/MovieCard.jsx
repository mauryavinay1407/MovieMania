import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-[300px] object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">{movie.title}</h3>
          <p className="text-gray-400 text-sm">
            {new Date(movie.release_date).getFullYear()}
          </p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">★</span>
            <span className="text-gray-400 ml-1">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;