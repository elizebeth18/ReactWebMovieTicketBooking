import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice';
import eventReducer from './eventSlice';

const store = configureStore({
    reducer: {
        movies: movieReducer,
        eventsList: eventReducer
    }
});

export default store;