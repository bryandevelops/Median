import { combineReducers } from 'redux';

import sessionsErrorsReducer from './sessions_errors_reducer';
import storiesErrorsReducer from './stories_errors_reducer'
import usersErrorsReducer from './users_errors_reducer';
import responseErrorsReducer from './responses_errors_reducer';

const errorsReducer = combineReducers({
  users: usersErrorsReducer,
  stories: storiesErrorsReducer,
  responses: responseErrorsReducer,
  sessions: sessionsErrorsReducer,
});

export default errorsReducer;