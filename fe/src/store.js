import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import createSagaMidlleware from 'redux-saga';
import logger from 'redux-logger';
import mainReducer from './mainReducer';
import mainSaga from './mainSaga';

const sagaMiddleware = createSagaMidlleware();
let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger];
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares),
);
/* eslint-enable */
sagaMiddleware.run(mainSaga);

export default store;
