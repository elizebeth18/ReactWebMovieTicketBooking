import { Box, Typography, Card, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchEvents, selectEventsList } from '../../store/eventSlice';

const Events = () => {

    const dispatch = useDispatch();
    const eventsFromStore = useSelector(selectEventsList);
    const [eventsList, setEventsList] = useState([]);

    console.log(eventsFromStore)

    useEffect(() => {
        dispatch(fetchEvents());
    }, []);

    useEffect(() => {
        eventsFromStore ? setEventsList(eventsFromStore) : dispatch(fetchEvents());

        console.log("state",eventsList)
    }, [eventsFromStore]);

    return (
        <>
            <Box sx={{ mt: 5 }}>
                <Typography variant='h5' align='center'>
                    NearBy Events
                </Typography>
                <Grid container justifyContent={'space-around'}>
                    {eventsList.map((events, index) => {
                        return(<Grid key={Math.random(1)} xs={10} sm={6} md={1}>
                        <Card>
                            <Typography variant='subtitle1'>{events.title}</Typography>
                        </Card>
                        </Grid>)

                    })}
                </Grid>
            </Box>
        </>
    )
}

export default Events;