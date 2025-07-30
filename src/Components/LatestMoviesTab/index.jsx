import { useState, useEffect } from "react";
import { Box, Typography, Card, Button, } from "@mui/material";
import { selectMoviesList, fetchMoviesList } from "../../store/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const LatestMoviesTab = () => {
    
    const [moviesList, setMoviesList] = useState([]);
    const dispatch = useDispatch();
    const moviesFromStore = useSelector(selectMoviesList)

    useEffect(() => {
        dispatch(fetchMoviesList());
    }, []);

    useEffect(()=>{
        setMoviesList(moviesFromStore)
    },[moviesFromStore]);

    const showMoviesList = () => {
        
    }

    return (
        <>
            <Box display={"flex"} sx={{ width: '100%', padding: 1, margin: 1 }} justifyContent={"center"} alignItems={"center"}>
                <Typography sx={{ textAlign: 'center' }} variant="h5">Latest Movies</Typography>
                    {showMoviesList}


            </Box>
            <Button>Back</Button>
        </>
    )
}

export default LatestMoviesTab;