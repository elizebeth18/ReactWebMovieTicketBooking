import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieTabs = () => {

    const [value] = useState(0);
    const navigate = useNavigate();

    const handleChange = (e, newValue) => {
        
        switch (newValue) {
            case '1':
            case '2':
                navigate('latestMovies');
                break;
            case '3':
                navigate('nearbyEvents');
                break;

            default:
                break;
        }
    }

    return (
        <>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab key="1" label="Latest Movies" value='1'
                    sx={{ border: '1px solid black', width: '33.33%' }} />
                <Tab key="2" label="Upcoming Movies" value='2' sx={{ border: '1px solid black', width: '33.33%', margin: '0 5px' }} />
                <Tab key="3" label="Nearby Events" value='3'
                    sx={{ width: '33.33%', border: '1px solid black' }} />
            </Tabs>
        </>
    );
}

export default MovieTabs;