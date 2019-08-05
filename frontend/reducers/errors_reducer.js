import { combineReducers } from 'redux';

import sessionsErrorsReducer from './sessions_errors_reducer';
import storiesErrorsReducer from './stories_errors_reducer'
import usersErrorsReducer from './users_errors_reducer';

const errorsReducer = combineReducers({
  users: usersErrorsReducer,
  stories: storiesErrorsReducer,
  sessions: sessionsErrorsReducer,
});

export default errorsReducer;