import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import reducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
export const Store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
