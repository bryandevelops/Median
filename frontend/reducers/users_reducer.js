import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions';
import { RECEIVE_USER, RECEIVE_FOLLOW, REMOVE_FOLLOW, RECEIVE_FOLLOWERS, RECEIVE_FOLLOWEES } from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, oldState, { [action.currentUser.id]: action.currentUser });
      return newState;
    case RECEIVE_USER:
      newState = merge({}, oldState, { [action.user.id]: action.user });
      return newState;
    case RECEIVE_FOLLOW:
      newState = merge({}, oldState, { [action.id]: { following: true } });
      return newState;
    case REMOVE_FOLLOW:
      newState = merge({}, oldState, { [action.id]: { following: false } });
      return newState;
    case RECEIVE_FOLLOWERS:
      newState = merge({}, oldState, action.users, 
        { [action.id]: { followers_index: action.follows } });
      return newState;
    case RECEIVE_FOLLOWEES:
      newState = merge({}, oldState, action.users, 
        { [action.id]: { followees_index: action.follows } });
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;