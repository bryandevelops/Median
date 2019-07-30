import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
});

export default rootReducer;