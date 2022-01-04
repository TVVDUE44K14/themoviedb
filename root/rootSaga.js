import { all } from "redux-saga/effects";
import movies from "/store/movieSaga";
export default function* rootSaga() {
  yield all([...movies]);
}
