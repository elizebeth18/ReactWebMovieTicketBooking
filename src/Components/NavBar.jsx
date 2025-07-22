import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, TextField, IconButton, Grid, Card, CardContent, Button, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function MovieBookingUI() {
  return (
    <Box>
      {/* 🔷 AppBar */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <TextField size="small" placeholder="Search" variant="outlined" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 🔹 Tabs */}
      <Tabs centered >
        <Tab label="Latest Movies" sx={{border: '1px solid lightblack'}}/>
        <Tab label="Upcoming Movies" sx={{border: '1px solid lightblack'}}/>
        <Tab label="Nearby Events" />
      </Tabs>

      {/* 🔄 Image Slider (placeholder) */}
      {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 200, border: '1px solid lightgray', m: 2 }}>
        <Button>{'<'}</Button>
        <Typography variant="h6">Movies Image Slider</Typography>
        <Button>{'>'}</Button>
      </Box> */}

      {/* 🎥 Recommended Movies */}
      {/* <Box sx={{ textAlign: 'center', mt: 4 }}>
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
      </Box>*/}
    </Box> 
  );
}
