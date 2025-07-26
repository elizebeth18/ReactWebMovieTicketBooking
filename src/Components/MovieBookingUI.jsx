import React, { useState } from 'react';
import { AppBar, Link, Toolbar, Tabs, Tab, TextField, IconButton, Grid, Card, CardContent, Button, Typography, Box, Container } from '@mui/material';
import NavBar from './Home/NavBar';
import MovieSlider from './Home/MovieSlider';

export default function MovieBookingUI() {
    const [value, setValue] = useState(0);

    return (
        <>
            <Box sx={{ width: "100vw", bgcolor: "#eac6f3", overflow: 'hidden' }}>

                <NavBar />


                <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} centered>
                    <Tab key="1" label="Latest Movies" sx={{ border: '1px solid black', width: '33.33%' }} />
                    <Tab key="2" label="Upcoming Movies" sx={{ border: '1px solid black', width: '33.33%', margin: '0 5px' }} />
                    <Tab key="3" label="Nearby Events" sx={{ width: '33.33%', border: '1px solid black' }} />
                </Tabs>


                <MovieSlider />

                {/* 🎥 Recommended Movies */}
                <Box sx={{ mt: 5 }}>
                    <Typography variant="h5" align="center" mb={1}>Recommended Movies</Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4'].map((movie) => (
                            <Grid key={Math.random(1)} xs={10} sm={6} md={3}>
                                <Card sx={{ p: 2, textAlign: "center" }}>
                                    <Typography variant="subtitle1">{movie}</Typography>
                                    <Button variant="outlined" sx={{ mt: 2 }}>Book</Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>




            </Box>

        </>
    );
}
