import { RECEIVE_ALL_STORIES, RECEIVE_STORY, REMOVE_STORY, RECEIVE_CLAP, REMOVE_CLAP, RECEIVE_TOTAL_CLAPS } from '../actions/story_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const storiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories;
    case RECEIVE_STORY:
      newState = merge({}, oldState, { [action.story.id]: action.story });
      return newState;
    case REMOVE_STORY:
      newState = merge({}, oldState);
      delete newState[action.storyId]
      return newState;
    case RECEIVE_USER:
      // debugger
      return action.user;
    case RECEIVE_CLAP:
      newState = merge({}, oldState, { [action.id]: { clapped: true } });
      return newState;
    case REMOVE_CLAP:
      newState = merge({}, oldState, { [action.id]: { clapped: false } });
    case RECEIVE_TOTAL_CLAPS:
      newState = merge({}, oldState, action.stories,
        { [action.id]: { total_claps: action.claps } });
    default:
      return oldState;
  }
};

export default storiesReducer;