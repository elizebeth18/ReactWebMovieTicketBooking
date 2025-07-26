import { Grid, Card, Button, Typography, Box } from '@mui/material';


const RecommendedMovies = (props) => {

    return (
        <>
            <Box sx={{ mt: 5 }}>
                <Typography variant="h5" align="center" mb={1}>Recommended Movies</Typography>
                <Grid container spacing={3} justifyContent="center">
                    {props.moviesList.map((movie) => (
                        <Grid key={Math.random(1)} xs={10} sm={6} md={3}>
                            <Card sx={{ p: 2, textAlign: "center" }}>
                                <Typography variant="subtitle1">{movie.title}</Typography>
                                <Button variant="outlined" sx={{ mt: 2 }}>Book</Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default RecommendedMovies;