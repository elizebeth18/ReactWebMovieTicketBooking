import { Box, Button, Typography, Card, Grid, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEvents, selectEventsList } from '../../store/eventSlice';

const Events = () => {

    const dispatch = useDispatch();
    const eventsFromStore = useSelector(selectEventsList);
    const [eventsList, setEventsList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchEvents());
    }, []);

    useEffect(() => {
        eventsFromStore ? setEventsList(eventsFromStore) : dispatch(fetchEvents());
    }, [eventsFromStore]);

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Grid container>
                    <Typography sx={{ m: 1,textAlign: 'center' }} variant='h5' align='center'>
                        NearBy Events
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button onClick={handleClick}>Back</Button>
                </Grid>
                <Grid container justifyContent='space-around' alignItems='center'>
                    {eventsList.map((events) => {
                        return (
                            <Grid key={Math.random(1)} xs={10} sm={6} md={1}>
                                <Card sx={{ p: 1, maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia alt={events.title}
                                            height="194" component="img"
                                            image={events.image} />
                                        <CardContent>
                                            <Typography variant='h5'>{events.title}</Typography>
                                            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                                {events.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>)

                    })}
                </Grid>
            </Box>
        </>
    )
}

export default Events;