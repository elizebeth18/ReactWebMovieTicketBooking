import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

const NavBar = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#540505' }}>
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