import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY
  }
});

api.interceptors.request.use(request => {
  // console.log('Starting Request:', request);
  return request;
});

api.interceptors.response.use(
  response => {
    // console.log('Response:', response);
    return response;
  },
  error => {
    console.error('API Error:', error.response);
    return Promise.reject(error);
  }
);

export const searchMovies = async (query) => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        query,
        language: 'en-US',
        include_adult: false
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Search Movies Error:', error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error('Get Movie Details Error:', error);
    throw error;
  }
};
