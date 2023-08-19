import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  searchText: "",
  shows: {},
  selectMovieOrShow: {}
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
    }
  }
});

export const { addMovies, addSearchText } = movieSlice.actions;
export default movieSlice.reducer;
