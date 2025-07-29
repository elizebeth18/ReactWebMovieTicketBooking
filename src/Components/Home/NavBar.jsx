import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

const NavBar = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'steelblue' }}>
                <Toolbar>
                    <Typography variant="h6" color='white' >
                        Movie Booking App
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    
                </Toolbar>
            </AppBar >
        </>
    )
}

export default NavBar;