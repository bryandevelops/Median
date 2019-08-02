import { RECEIVE_ALL_STORIES, RECEIVE_STORY, REMOVE_STORY } from '../actions/story_actions';
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
    default:
      return oldState;
  }
};

export default storiesReducer;