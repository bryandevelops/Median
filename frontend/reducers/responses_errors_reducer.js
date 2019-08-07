import { RECEIVE_RESPONSE_ERRORS } from '../actions/response_actions';

const responseErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_RESPONSE_ERRORS:
      return action.errors || null;
    default:
      return oldState;
  }
};

export default responseErrorsReducer;