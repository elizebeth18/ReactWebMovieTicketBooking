import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, TextField, IconButton, Grid, Card, CardContent, Button, Typography, Box } from '@mui/material';
import NavBar from './Home/NavBar';

export default function MovieBookingUI() {
    return (
        <Box sx={{ width: '100vw' }}>
            <NavBar />

            
            <Tabs  >
                <Tab label="Latest Movies" sx={{ border: '1px solid black', width: '33.33%' }} />
                <Tab label="Upcoming Movies" sx={{ border: '1px solid black', width: '33.33%', margin: '0 5px' }} />
                <Tab label="Nearby Events" sx={{ width: '33.33%', border: '1px solid black' }} />
            </Tabs>

            {/* 🔄 Image Slider (placeholder) */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 200, border: '1px solid lightgray', m: 2 }}>
                <Button>{'<'}</Button>
                <Typography variant="h6">Movies Image Slider</Typography>
                <Button>{'>'}</Button>
            </Box>

            {/* 🎥 Recommended Movies */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h6">Recommended Movies</Typography>
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                    {['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4'].map((movie, index) => (
                        <Grid item key={index}>
                            <Card sx={{ width: 150, height: 200 }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography>{movie}</Typography>
                                    <Button variant="outlined" sx={{ mt: 4 }}>Book</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
