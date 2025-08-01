import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardActions, Button, CardMedia, } from "@mui/material";
import { selectMoviesList, fetchMoviesList } from "../../store/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LatestMoviesTab = () => {

    const navigate = useNavigate();
    const [moviesList, setMoviesList] = useState([]);
    const dispatch = useDispatch();
    const moviesFromStore = useSelector(selectMoviesList)

    useEffect(() => {
        dispatch(fetchMoviesList());
    }, []);

    useEffect(() => {
        setMoviesList(moviesFromStore)
    }, [moviesFromStore]);

    const handleNavigate = () => {
        navigate('/movieDetails')
    }

    const showMoviesList = () => {
        return (
            moviesList && moviesList.map((movie) => {
                return (
                    <Card sx={{ width: '350px' }}>
                        <CardMedia sx={{ height: 300 }}
                            image={movie.image} />
                        <CardContent>
                            <Typography sx={{ textAlign: "center" }}variant="subtitle1">{movie.title}</Typography>
                            <Typography variant="body2">{movie.plot}</Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: "center" }}>
                            <Button variant="outlined" onClick={handleNavigate}>
                                Book
                            </Button>
                        </CardActions>
                    </Card>)
            })
        )

    }

    const handleClick = () => {
        navigate('/');
    }

    return (
        <>
            <Box sx={{ m: 1 }}>
                <Box display={'flex'} sx={{ px: 2, py: 1 }}>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="h5">Latest Movies</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant="contained" onClick={handleClick}>Back</Button>
                </Box>
                <Box display={'flex'} justifyContent={"center"} alignItems={"center"} gap={2} >
                    {showMoviesList()}
                </Box>
            </Box>
        </>
    )
}

export default LatestMoviesTab;