import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import MainOutlet from './MainOutlet';
import MovieBookingUI from './MovieBookingUI';
import Events from './NearByEvents';
import NavBar from './Home/NavBar';

const Routing = () => {

    return (
        <BrowserRouter>
            <Box sx={{ width: "100vw", bgcolor: "#eac6f3", overflow: 'hidden' }}>
                <NavBar />
                <Routes>
                    <Route path='/' element={<MainOutlet />}>
                        <Route index element={<MovieBookingUI />} />
                        <Route path='nearbyEvents' element={<Events />} />
                    </Route>
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default Routing;