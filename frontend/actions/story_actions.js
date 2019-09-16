import * as StoryAPIUtil from '../util/stories_api_util';

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const RECEIVE_STORY_ERRORS = "RECEIVE_STORY_ERRORS";
export const RECEIVE_CLAP = "RECEIVE_CLAP";
export const REMOVE_CLAP = "REMOVE_CLAP";
export const RECEIVE_TOTAL_CLAPS = "RECEIVE_TOTAL_CLAPS";

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

export const receiveClap = id => {
  return({
    type: RECEIVE_CLAP,
    id
  })
};

export const removeClap = id => {
  return({
    type: REMOVE_CLAP,
    id
  })
};

export const receiveTotalClaps = payload => {
  return({
    type: RECEIVE_TOTAL_CLAPS,
    claps: payload.claps,
    users: payload.users,
    id: payload.id
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

export const clapStory = id => dispatch => {
  return StoryAPIUtil.clapStory(id).then(() => (
    dispatch(receiveClap(id))
  ))
};

export const unclapStory = id => dispatch => {
  return StoryAPIUtil.unclapStory(id).then(() => (
    dispatch(removeClap(id))
  ))
};

export const fetchTotalClaps = id => dispatch => {
  return StoryAPIUtil.fetchTotalClaps(id).then(payload => (
    dispatch (receiveTotalClaps(payload))
  ))
};