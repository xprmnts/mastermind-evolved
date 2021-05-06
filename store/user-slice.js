import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { userName: null },
    reducers: {
        authenticate(state, action) {
            state.userName = action.payload.username;
            // receives user payload
            //
        },
        deAuthenticate(state) {
            // set's app state to be unauthenticated
            state.userName = null;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;
