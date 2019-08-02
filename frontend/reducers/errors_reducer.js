import { combineReducers } from 'redux';

import sessionsErrorsReducer from './sessions_errors_reducer';
import storiesErrorsReducer from './stories_errors_reducer'

const errorsReducer = combineReducers({
  sessions: sessionsErrorsReducer,
  stories: storiesErrorsReducer,
});

export default errorsReducer;