import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieSlider = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
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

    return (
        <Box sx={{ width: '65%', mx: 'auto', my: 2 }}>
            <Slider {...settings}>
                {props.moviesList && props.moviesList.map((movie, index) => {
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