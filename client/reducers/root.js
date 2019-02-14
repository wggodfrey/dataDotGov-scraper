import { combineReducers } from 'redux';

import settings from 'reducers/settings';
import results from 'reducers/results';

const rootReducer = combineReducers({
  settings, results,
});

export default rootReducer;
