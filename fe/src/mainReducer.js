import { combineReducers } from 'redux';
import app from './containers/App/reducers';

const mainReducer = combineReducers({
  app,
});

/**
 * Describe all reducers used in project
 */
export default mainReducer;
