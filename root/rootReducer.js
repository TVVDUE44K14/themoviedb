import { combineReducers } from "@reduxjs/toolkit";
import movies from "/store/movieSlice";
const reducer = combineReducers({
  movies,
});

export default reducer;
