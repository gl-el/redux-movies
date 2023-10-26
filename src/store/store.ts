import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies.slice';
import movieDetailsReducer from './movieDetails.slice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
