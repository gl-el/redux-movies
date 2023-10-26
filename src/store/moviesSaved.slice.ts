import { MovieSaved } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

interface State {
  savedMovies: MovieSaved[];
}

const savedData = localStorage.getItem('watched');

const initialState: State = {
  savedMovies: savedData ? JSON.parse(savedData) : [],
};

export const moviesSavedSlice = createSlice({
  name: 'moviesSaved',
  initialState,
  reducers: {
    saveMovie: (state, action) => {
      const filtered = state.savedMovies.filter((item) => item.imdbID !== action.payload.imdbID);
      state.savedMovies = [...filtered, action.payload];
    },
    deleteMovie: (state, action) => {
      const filtered = state.savedMovies.filter((item) => item.imdbID !== action.payload);
      state.savedMovies = filtered;
    },
  },
});

export const { saveMovie, deleteMovie } = moviesSavedSlice.actions;

export default moviesSavedSlice.reducer;
