import { Movie, MoviesSearch, Status } from '@/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { MoviesService } from './movies.service';

interface State {
  total: number;
  page: number;
  movies: Movie[];
  status: Status;
  message: string;
}

const initialState: State = {
  total: 0,
  page: 1,
  movies: [],
  status: 'idle',
  message: '',
};

export const getMovies = createAsyncThunk<MoviesSearch, string, { rejectValue: string }>(
  'movies/getMoviesByQuery',
  async (query: string, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const page = state.movies.page;
    try {
      const res = await MoviesService.fetchByQuery(query, page);

      if (!res.ok) throw new Error('Failed to get movies');

      const data = await res.json();

      if (data.Response === 'False') throw new Error(data.Error);

      return data;
    } catch (error) {
      if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    resetSearch: (state) => {
      state.page = 1;
      state.movies = [];
      state.status = 'idle';
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action: PayloadAction<MoviesSearch>) => {
      if (action.payload.Search) state.movies = action.payload.Search;
      state.total = Number(action.payload.totalResults);
      state.status = 'success';
    });
    builder.addCase(getMovies.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.status = 'error';
      // initialState
      state.page = 1;
      state.total = 0;
      state.movies = [];
      if (action.payload) {
        state.message = action.payload;
      } else {
        state.message = 'Error occurred';
      }
    });
  },
});

// setPage не используется
export const { setPage, setStatus, resetSearch } = moviesSlice.actions;

export default moviesSlice.reducer;
