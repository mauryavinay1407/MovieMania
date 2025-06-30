import { useAIAssistant } from '../context/AIAssistantContext';
import { useLocation, useParams } from 'react-router-dom';
import MovieAIAssistant from './MovieAIAssistant';
import { useEffect, useState } from 'react';
import { useMovie } from '../context/MovieContext';

const AIAssistantPanel = () => {
  const { isAIOpen, setIsAIOpen } = useAIAssistant();
  const location = useLocation();
  const { movie } = useMovie();

  if (!isAIOpen) return null;

  const isMoviePage = location.pathname.startsWith('/movie/');

  return (
    <div className="fixed right-0 top-0 h-full sm:w-96 bg-gray-900 shadow-lg z-50 pt-16">
      <div className="p-4 h-[calc(100%-4rem)] overflow-y-auto">
        <button
          onClick={() => setIsAIOpen(false)}
          className="absolute top-20 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        <MovieAIAssistant
          movieTitle={isMoviePage ? movie?.title : 'General Movies'}
          movieOverview={
            isMoviePage ? movie?.overview : 'Tell me about movies in general'
          }
        />
      </div>
    </div>
  );
};

export default AIAssistantPanel;
