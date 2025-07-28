import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'steelblue' }}>
                <Toolbar>
                    <Typography variant="h6" color='white' >
                        Movie Booking App
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link to="/">
                        Back
                    </Link>
                </Toolbar>
            </AppBar >
        </>
    )
}

export default NavBar;