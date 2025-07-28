import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import NavBar from './Home/NavBar';
import MovieSlider from './Home/MovieSlider';
import { fetchMoviesList, selectMoviesList } from '../store/movieSlice';
import RecommendedMovies from './Recommended Movies';
import Events from './NearByEvents';
import FinalBooking from './FinalBooking';
import MovieTabs from './MovieTabs';

export default function MovieBookingUI() {

    const [moviesList, setMoviesList] = useState([]);
    const dispatch = useDispatch();
    const moviesFromStore = useSelector(selectMoviesList);


    useEffect(() => {
        const fetchAction = dispatch(fetchMoviesList());

        return () => {
            fetchAction.abort(); //cancels the request if unmounted early
        };

    }, [dispatch]);

    useEffect(() => {
        moviesFromStore ? setMoviesList(moviesFromStore) : dispatch(fetchMoviesList())
    }, [moviesFromStore]);



    return (
        <>
            

                

                <MovieTabs />


                <MovieSlider moviesList={moviesList} />

                <RecommendedMovies moviesList={moviesList} />

                <FinalBooking />
        </>
    );
}
