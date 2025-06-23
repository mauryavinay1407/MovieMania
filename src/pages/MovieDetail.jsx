import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import Loader from '../components/Loader';
import {api} from '../services/api';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await api.get(`/movie/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <div className='h-screen w-full flex items-center justify-center'>
            <Loader />;
        </div>
    }

    return (
        <div>
            {movie && <MovieDetails movie={movie} />}
        </div>
    );
};

export default MovieDetail;