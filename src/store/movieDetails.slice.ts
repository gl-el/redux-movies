import { MovieDetails, Status } from '@/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MoviesService } from './movies.service';

interface State {
  movie: MovieDetails | null;
  status: Status;
  message: string;
}

const initialState: State = {
  movie: null,
  status: 'idle',
  message: '',
};

export const getMovie = createAsyncThunk<MovieDetails, string, { rejectValue: string }>(
  'movieDetails/getMovieById',
  async (id: string, thunkApi) => {
    try {
      const res = await MoviesService.fetchById(id);
      if (!res.ok) throw new Error('Failed to get movie');
      const data = await res.json();
      if (data.Response === 'False') throw new Error(data.Error);
      return data;
    } catch (error) {
      if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovie.fulfilled, (state, action: PayloadAction<MovieDetails>) => {
      state.movie = action.payload;
      state.status = 'success';
    });
    builder.addCase(getMovie.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getMovie.rejected, (state, action) => {
      state.status = 'error';
      state.message = action.payload || 'Error occurred';
    });
  },
});

export const { setStatus } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
