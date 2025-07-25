import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const movies = [
    {
        title: "Thor: Ragnarok",
        image: "https://image.tmdb.org/t/p/w500/zB4G3D0WcaaXOrX1D8oWnBCXxvH.jpg",
        genre: "Action, Comedy"
    },
    {
        title: "Avengers: Endgame",
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        genre: "Action, Sci-Fi"
    },
    {
        title: "The Dark Knight",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        genre: "Crime, Drama"
    },
    {
        title: "Interstellar",
        image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        genre: "Sci-Fi, Drama"
    }
];

const MovieSlider = () => {
    const [moviesList, setMoviesList] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
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
        axios.get('http://localhost:9112/movies')
            .then((response) => {
                setMoviesList(response.data);
            })
            .catch((err) => {
                console.error(err)
            })
    }, []);

    return (
        <Box sx={{ width: '65%', mx: 'auto', my: 2 }}>
            <Typography variant='h6' textAlign='center'>
                Now Showing
            </Typography>
            <Slider {...settings}>
                {moviesList && moviesList.map((movie, index) => {
                    return (
                        <Box key={index} px={2}>
                            <Card sx={{ borderRadius: 3 }}>
                                <CardMedia component="img"
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