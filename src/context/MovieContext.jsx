import { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);