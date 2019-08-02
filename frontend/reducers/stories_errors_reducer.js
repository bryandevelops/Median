import { RECEIVE_STORY_ERRORS, RECEIVE_STORY } from '../actions/story_actions';

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

/*
case RECEIVE_STORY:
      return [];
Unsure about RECEIVE_STORY...but what I was thinking was if you first try to 
publish an invalid story and errors render, if you successfully create one then
the errors should be cleared.
*/