import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import Loader from '../components/Loader';
import MovieAIAssistant from './MovieAIAssistant';
import { useMovie } from '../context/MovieContext';

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, setMovie } = useMovie();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {loading && <Loader />}
      {!loading && movie && (
        <div className="relative">
          {/* Backdrop Image */}
          <div className="absolute inset-0 h-[500px]">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 pt-[180px]">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Poster */}
              <div className="w-full md:w-1/3 lg:w-1/4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>

              {/* Details */}
              <div className="w-full md:w-2/3 lg:w-3/4">
                <h1 className="text-4xl font-bold text-white mb-4">
                  {movie.title}
                </h1>

                {/* Genres */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {movie.genres?.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>

                {/* Rating and Release Date */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-white">
                      {movie.vote_average?.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-300">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-300">{movie.runtime} min</span>
                </div>

                {/* Overview */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    Overview
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {movie.overview}
                  </p>
                </div>

                {/* Back Button */}
                <Link
                  to="/"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  ← Back to Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
