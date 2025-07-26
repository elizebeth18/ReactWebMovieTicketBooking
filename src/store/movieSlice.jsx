import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    moviesList: [],
    isLoading: false,
    error: null
};

export const fetchMoviesList = createAsyncThunk('movie/fetch', async (_, { signal }) => {

    //'_' in the async function means ignore if no payload to pass
    const controller = new AbortController();

    //if the signal from RTK aborts, cancel the controller
    signal.addEventListener('abort', () => {
        controller.abort(); //will cancel the axios request
    });

    const response = await axios.get('http://localhost:9112/movies', {
        signal: controller.signal
    });
    
    return response.data;
})

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoviesList.pending, state => {
                state.isLoading = true;
                state.movies = [];
                state.error = null
            })
            .addCase(fetchMoviesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.moviesList = action.payload;
            })
            .addCase(fetchMoviesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
            })
    }
});

export const selectMoviesList = state => state.movies.moviesList
export default movieSlice.reducer;
