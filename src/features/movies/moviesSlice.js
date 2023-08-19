import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  searchText: "",
  isDetails: false,
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
    },
    setDetails: (state, { payload }) => {
      state.isDetails = payload;
    }
  }
});

export const { addMovies, addSearchText, setDetails } = movieSlice.actions;
export default movieSlice.reducer;
