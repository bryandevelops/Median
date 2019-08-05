import * as StoryAPIUtil from '../util/stories_api_util';

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const RECEIVE_STORY_ERRORS = "RECEIVE_STORY_ERRORS";

export const receiveAllStories = stories => {
  return({
    type: RECEIVE_ALL_STORIES,
    stories
  })
};

export const receiveStory = story => {
  return({
    type: RECEIVE_STORY,
    story
  })
};

export const removeStory = story => {
  return({
    type: REMOVE_STORY,
    storyId: story.id
  })
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_STORY_ERRORS,
    errors
  })
};

export const fetchStories = () => dispatch => {
  return StoryAPIUtil.fetchStories().then(stories => (
    dispatch(receiveAllStories(stories))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const fetchStory = id => dispatch => {
  return StoryAPIUtil.fetchStory(id).then(story => (
    dispatch(receiveStory(story))
  ), err => (
    dispatch(receiveErrors(err.status))
  ))
};

export const createStory = story => dispatch => {
  
  return StoryAPIUtil.createStory(story).then(story => (
    dispatch(receiveStory(story))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const updateStory = story => dispatch => {
  return StoryAPIUtil.updateStory(story).then(story => (
    dispatch(receiveStory(story))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const deleteStory = storyId => dispatch => {
  return StoryAPIUtil.deleteStory(storyId).then(story => (
    dispatch(removeStory(story))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};