import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieTabs = () => {

    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleChange = (e, newValue) => {
        navigate(newValue);
    }

    return (
        <>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab key="1" label="Latest Movies" value='latestMovies'
                    sx={{ border: '1px solid black', width: '33.33%' }} />
                <Tab key="2" label="Upcoming Movies" sx={{ border: '1px solid black', width: '33.33%', margin: '0 5px' }} />
                <Tab key="3" label="Nearby Events" value='nearbyEvents'
                    sx={{ width: '33.33%', border: '1px solid black' }} />
            </Tabs>
        </>
    );
}

export default MovieTabs;