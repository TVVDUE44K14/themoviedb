import movieAPI from "../service/movieAPI";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getListMoviesFail,
  getListMoviesRequest,
  getListMoviesSuccess,
} from "./movieSlice";

export function* getListMovies(action) {
  try {
    const { results } = yield call(movieAPI.getAllMovies, action.payload);
    yield put(getListMoviesSuccess(results));
  } catch (error) {
    yield put(getListMoviesFail(error));
  }
}
function* watchGetList() {
  yield takeLatest(getListMoviesRequest.type, getListMovies);
}

const saga = [watchGetList()];

export default saga;
