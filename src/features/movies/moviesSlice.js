import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  searchText: "",
  isDetails: false,
  movieDetails: {},
  loading: false,
  page: 1
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    addSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
    setDetails: (state, { payload }) => {
      state.isDetails = payload;
    },
    setMovieDetails: (state, { payload }) => {
      state.movieDetails = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    }
  }
});

export const {
  addMovies,
  addSearchText,
  setDetails,
  setMovieDetails,
  setLoading,
  setPage
} = movieSlice.actions;
export default movieSlice.reducer;
