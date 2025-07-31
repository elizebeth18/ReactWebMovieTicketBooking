import { useState, useEffect } from "react";
import { Box, Typography, Card, CardActions, Button, CardMedia, } from "@mui/material";
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

    const showMoviesList = () => {
        return (
            moviesList && moviesList.map((movie) => {
                return (
                    <Card sx={{ width: '350px' }}>
                        <CardMedia sx={{ height: 80 }}
                            image={movie.image} />
                        <CardActions sx={{ justifyContent: "center" }}>
                            <Button variant="outlined">Book</Button>
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
                <Box display={'flex'} sx={{ px: 1, py: 1 }}>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="h5">Latest Movies</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant="contained" onClick={handleClick}>Back</Button>
                </Box>
                <Box display={'flex'} justifyContent={"center"} alignItems={"center"} gap={1} flexDirection={'column'}>
                    {showMoviesList()}
                </Box>
            </Box>
        </>
    )
}

export default LatestMoviesTab;