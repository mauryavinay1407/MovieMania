import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import Loader from '../components/Loader';
import { searchMovies } from '../services/api';

const Home = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async () => {
        if (!query) return;
        setLoading(true);
        setError('');
        setHasSearched(true);
        try {
            const results = await searchMovies(query);
            setMovies(results);
        } catch (err) {
            setError('Failed to fetch movies. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 relative overflow-x-hidden">
            {/* Subtle animated background */}
            <div className="absolute inset-0 top-56 sm:top-68">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-gray-950 to-purple-950"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
            
            {/* Hero Section */}
            <div className="relative z-10 top-auto sm:top-[-90px] pt-16 pb-20 px-4 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        {/* Icon */}
                        <div className="flex justify-center mb-12 sm:mb-6">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/25">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                                </svg>
                            </div>
                        </div>
                        
                        {/* Main heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-20 sm:mb-6 leading-tight">
                            Discover Your Next
                            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Favorite Movie
                            </span>
                        </h1>
                        
                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-20 sm:mb-4 max-w-4xl mx-auto leading-relaxed px-4">
                            Search through millions of movies and find the perfect one for your mood.
                            <span className="text-indigo-300 block mt-2">Your next cinematic adventure awaits.</span>
                        </p>
                        
                        {/* Search box*/}
                        <div className="w-full sm:max-w-2xl mx-auto px-4">
                            <div className="w-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 shadow-2xl">
                                <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="relative z-10 px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Loading state */}
                    {loading && (
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 mb-8">
                            <Loader />
                        </div>
                    )}
                    
                    {/* Error state */}
                    {error && (
                        <div className="bg-red-950/50 border border-red-800/50 rounded-2xl p-6 mb-8">
                            <p className="text-red-400 text-center text-lg">{error}</p>
                        </div>
                    )}
                    
                    {/* No results */}
                    {hasSearched && !loading && movies.length === 0 && (
                        <div className="text-center py-16">
                            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-800/50 max-w-2xl mx-auto">
                                <div className="w-24 h-24 mx-auto mb-8 bg-gray-800 rounded-full flex items-center justify-center">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">No Movies Found</h2>
                                <p className="text-gray-400 text-base sm:text-lg">
                                    Try searching with different keywords
                                </p>
                            </div>
                        </div>
                    )}
                    
                    {/* Results */}
                    {movies.length > 0 && (
                        <div className="space-y-8">
                            <div className="text-center">
                                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                    Search Results
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                            </div>
                            
                            <div className="bg-gray-900/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-800/50">
                                <MovieGrid movies={movies} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;