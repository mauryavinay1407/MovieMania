import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies }) => {
  if (!movies.length) {
    return <p className="text-gray-400">No movies found. Try searching for something!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;