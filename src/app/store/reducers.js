import { combineReducers } from 'redux';

import countReducer from '../components/Counter/reducer';

const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;
