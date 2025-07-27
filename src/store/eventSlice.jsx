import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    events: [],
    isLoading: false,
    error: null
};

export const base_url = import.meta.env.VITE_API_URL;

export const fetchEvents = createAsyncThunk('eventSlice/fetch', async (_, { signal }) => {
    
    //'_' in the async function means ignore if no payload to pass
    const controller = new AbortController();

    //if the signal from RTK aborts, cancel the controller
    signal.addEventListener('abort',() => {
        controller.abort();
    })
    const response = await axios.get(`${base_url}/events`,{
        signal: controller.signal
    });

    return response.data;
})

const eventSlice = createSlice({
    name: 'eventsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchEvents.pending,(state) => {
                state.isLoading = true;
                state.error = null;
                state.events = [];
            })
            .addCase(fetchEvents.fulfilled,(state,action) => {
                state.isLoading = false;
                state.events = action.payload;
            })
            .addCase(fetchEvents.rejected,(state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
            })
    }
});

export const selectEventsList = state => state.eventsList.events;
export default eventSlice.reducer;