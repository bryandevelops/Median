import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/sessions_actions';

const sessionsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS: {
      debugger
      return action.errors;
    }
    case RECEIVE_CURRENT_USER: {
      return [];
    }
    default:
      return oldState;
  }
};

export default sessionsErrorsReducer