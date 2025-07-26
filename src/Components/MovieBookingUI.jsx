import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, Tab, Box } from '@mui/material';
import NavBar from './Home/NavBar';
import MovieSlider from './Home/MovieSlider';
import { fetchMoviesList, selectMoviesList } from '../store/movieSlice';
import RecommendedMovies from './Recommended Movies';
import Events from './Events';

export default function MovieBookingUI() {

    const [value, setValue] = useState(0);
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
            <Box sx={{ width: "100vw", bgcolor: "#eac6f3", overflow: 'hidden' }}>

                <NavBar />

                <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} centered>
                    <Tab key="1" label="Latest Movies" sx={{ border: '1px solid black', width: '33.33%' }} />
                    <Tab key="2" label="Upcoming Movies" sx={{ border: '1px solid black', width: '33.33%', margin: '0 5px' }} />
                    <Tab key="3" label="Nearby Events" sx={{ width: '33.33%', border: '1px solid black' }} />
                </Tabs>

                <MovieSlider moviesList={moviesList} />

                <RecommendedMovies moviesList={moviesList} />

                <Events />

            </Box>
        </>
    );
}
