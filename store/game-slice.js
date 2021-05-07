import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameId: null,
        status: null,
        attemptsAllowed: null,
        attemptsUsed: null,
        history: []
    },
    reducers: {
        startGame(state, action) {
            state.gameId = action.payload._id;
            state.status = action.payload.status;
            state.attemptsAllowed = action.payload.attemptsAllowed;
            state.attemptsUsed = action.payload.attemptsUsed;
            // set
        },
        updateGame(state, action) {
            //
        }
    }
});

export const gameActions = gameSlice.actions;

export default gameSlice;
