import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainOutlet from './MainOutlet';
import MovieBookingUI from './MovieBookingUI';

const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainOutlet />}>
                    <Route index element={<MovieBookingUI />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;