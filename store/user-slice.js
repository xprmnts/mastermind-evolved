import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { username: null, userId: null },
    reducers: {
        authenticate(state, action) {
            state.username = action.payload.username;
            state.userId = action.payload.userId;
            // receives user payload
            //
        },
        deAuthenticate(state) {
            // set's app state to be unauthenticated
            state.username = null;
            state.userId = null;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;
