import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, } from '../actions/sessions_actions';

const _nullUser = Object.freeze({ id: null });

const sessionsReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, oldState, { id: action.currentUser.id });
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return oldState;
  }
};

export default sessionsReducer;