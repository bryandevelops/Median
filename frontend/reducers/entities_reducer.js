import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import storiesReducer from './stories_reducer';
import responsesReducer from './responses_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stories: storiesReducer,
  responses: responsesReducer,
});

export default entitiesReducer;