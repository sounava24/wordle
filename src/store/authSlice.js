import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Data: "",
    found:false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setup: (state, action) => {
            console.log("word setup", action.payload); // Debugging line
            state.Data = action.payload;
        },
        founded: (state, action) => {
            state.found = true;
        }
    }
});

export const {setup,founded } = authSlice.actions;
export default authSlice.reducer;