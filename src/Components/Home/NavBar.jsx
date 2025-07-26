import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, TextField, IconButton, Grid, Card, CardContent, Button, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
    return (
        <>
            <AppBar position="static" sx={{backgroundColor:'steelblue'}}>
                <Toolbar>
                    <Typography variant="h6" color='white' >
                        Movie Booking App
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <TextField size="small" placeholder="Search" variant="outlined" />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;