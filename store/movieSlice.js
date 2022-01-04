import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_STATE } from "../constant";
export const initMovieDetail = {
  id: 0,
  poster_path: "",
  backdrop_path: "",
  original_title: "",
  release_date: "",
  genres: [],
  runtime: 0,
  vote_average: 0,
  tagline: "",
  overview: "",
  status: "",
  original_language: "",
  budget: 0,
  revenue: 0,
  title: "",
  belongs_to_collection: { backdrop_path: "", name: "" },
};

const initialState = {
  ...DEFAULT_STATE,
  list: [],
  detail: initMovieDetail,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getListMoviesRequest: (state, action) => {
      state.loading = true;
    },
    getListMoviesSuccess: (state, action) => {
      state.loading = false;
      state.list.push(action.payload);
      state.status = true;
    },
    getListMoviesFail: (state, action) => {
      state.error = action.payload;
      state.status = false;
    },
    getDetailMovieRequest: (state, action) => {
      state.loading = true;
    },
    getDetailMovieSuccess: (state, action) => {
      state.loading = false;
      state.status = true;
      state.detail = action.payload;
    },
    getDetailMovieFail: (state, action) => {
      state.error = action.payload;
      state.status = false;
      state.loading = false;
    },
  },
});
//actions
export const {
  getListMoviesRequest,
  getListMoviesSuccess,
  getListMoviesFail,
  getDetailMovieRequest,
  getDetailMovieSuccess,
  getDetailMovieFail,
} = movieSlice.actions;

export default movieSlice.reducer;
