import { RECEIVE_USER_ERRORS } from '../actions/user_actions';

const usersErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors || null;
    default:
      return oldState;
  }
};

export default usersErrorsReducer;