import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';

// TESTING START
import { fetchStories, fetchStory, createStory, updateStory, deleteStory } from './actions/story_actions';
import { fetchResponses, fetchResponse, createResponse, updateResponse, deleteResponse } from './actions/response_actions';
import { fetchUser } from './actions/user_actions';
// TESTING END

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      sessions: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchStories = fetchStories;
  window.fetchStory = fetchStory;
  window.createStory = createStory;
  window.updateStory = updateStory;
  window.deleteStory = deleteStory;
  window.fetchResponses = fetchResponses;
  window.fetchResponse = fetchResponse;
  window.createResponse = createResponse;
  window.updateResponse = updateResponse;
  window.deleteResponse = deleteResponse;
  window.fetchUser = fetchUser;
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root)
});