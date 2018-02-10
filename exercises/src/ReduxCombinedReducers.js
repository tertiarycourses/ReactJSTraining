import { combineReducers } from 'redux';
import showByQueryReducer from './ReduxShowByQueryReducer';

const ReduxCombinedReducers = combineReducers({
  queriedShows: showByQueryReducer
});

export default ReduxCombinedReducers;
