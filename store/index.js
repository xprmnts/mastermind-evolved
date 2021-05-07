import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user-slice';
import gameSlice from './game-slice';

const store = configureStore({
    reducer: { user: userSlice.reducer, game: gameSlice.reducer }
});

export default store;
