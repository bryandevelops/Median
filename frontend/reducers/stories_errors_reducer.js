import { RECEIVE_STORY_ERRORS } from '../actions/story_actions';

const storiesErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_STORY_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default storiesErrorsReducer;