import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { selectMoviesList, fetchMoviesList } from '../../store/movieSlice';
import { useSelector, useDispatch } from 'react-redux';

const MovieSlider = () => {
    const [moviesList, setMoviesList] = useState([]);
    const dispatch = useDispatch();
    const moviesFromStore = useSelector(selectMoviesList);
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    useEffect(() => {
        moviesFromStore ? setMoviesList(moviesFromStore) : dispatch(fetchMoviesList);
    }, [moviesFromStore])

    useEffect(() => {
        dispatch(fetchMoviesList());
    }, []);

    return (
        <Box sx={{ width: '65%', mx: 'auto', my: 2 }}>
            <Slider {...settings}>
                {moviesList && moviesList.map((movie, index) => {
                    return (
                        <Box key={index} px={1}>
                            <Card sx={{ width: 320, borderRadius: 3 }}>
                                <CardMedia sx={{ objectFit: "cover" }} component="img"
                                    height="250" alt={movie.title}
                                    image={movie.image} />
                                <CardContent>
                                    <Typography variant='h6' fontWeight='bold'>
                                        {movie.title}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        {movie.genre}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    );
                })}
            </Slider>
        </Box>
    )
}

export default MovieSlider;