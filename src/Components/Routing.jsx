import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import NavBar from './Home/NavBar';
import { Suspense, lazy } from 'react';
import LatestMoviesTab from './LatestMoviesTab';

const MainOutlet = lazy(() => import('./MainOutlet'))
const MovieBookingUI = lazy(() => import('./MovieBookingUI'));
const Events = lazy(() => import('./NearByEventsTab'));

const Routing = () => {

    return (
        <BrowserRouter>
            <Box sx={{ width: "100vw", bgcolor: "#eac6f3", overflow: 'hidden' }}>
                <NavBar />
                <Suspense fallback={<Box sx={{ width: '100vw' }}>
                    <Typography variant='h2' sx={{ m: 2, p: 2 }}>Loading...</Typography></Box>}>
                    <Routes>
                        <Route path='/' element={<MainOutlet />}>
                            <Route index element={<MovieBookingUI />} />
                            <Route path='nearbyEvents' element={<Events />} />
                            <Route path='latestMovies' element={<LatestMoviesTab />} />
                        </Route>
                    </Routes>
                </Suspense>
            </Box>
        </BrowserRouter>
    );
}

export default Routing;