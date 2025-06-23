import React from 'react';

const SearchBar = ({ query, setQuery, onSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch();
    };

    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for movies..."
                    className="w-full px-6 py-4 rounded-lg bg-gray-800/90 text-white placeholder-gray-400 
                    border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:border-transparent text-lg backdrop-blur-sm"
                />
                <button
                    type="submit"
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                    transition-colors font-semibold text-lg shadow-lg hover:shadow-blue-500/20"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;