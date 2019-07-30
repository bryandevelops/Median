import { combineReducers } from 'redux';

import sessionsErrorsReducer from './sessions_errors_reducer';

const errorsReducer = combineReducers({
  sessions: sessionsErrorsReducer,
});

export default errorsReducer;