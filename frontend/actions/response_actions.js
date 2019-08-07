import * as ResponseAPIUtil from '../util/responses_api_util';

export const RECEIVE_ALL_RESPONSES = "RECEIVE_ALL_RESPONSES";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";
export const REMOVE_RESPONSE = "REMOVE_RESPONSE";
export const RECEIVE_RESPONSE_ERRORS = "RECEIVE_RESPONSE_ERRORS";

export const receiveAllResponses = responses => {
  return({
    type: RECEIVE_ALL_RESPONSES,
    responses
  })
};

export const receiveResponse = response => {
  return({
    type: RECEIVE_RESPONSE,
    response
  })
};

export const removeResponse = response => {
  return({
    type: REMOVE_RESPONSE,
    response
  })
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_RESPONSE_ERRORS,
    errors
  })
};

export const fetchResponses = storyId => dispatch => {
  return ResponseAPIUtil.fetchResponses(storyId).then(responses => (
    dispatch(receiveAllResponses(responses))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const fetchResponse = storyId => dispatch => {
  return ResponseAPIUtil.fetchResponse(storyId).then(response => (
    dispatch(receiveResponse(response))
  ), err => (
    dispatch(receiveErrors(err.status))
  ))
};

export const createResponse = response => dispatch => {
  return ResponseAPIUtil.createResponse(response).then(response => (
    dispatch(receiveResponse(response))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const updateResponse = response => dispatch => {
  return ResponseAPIUtil.updateResponse(response).then(response => (
    dispatch(receiveResponse(response))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const deleteResponse = response => dispatch => {
  return ResponseAPIUtil.deleteResponse(response).then(response => (
    dispatch(removeResponse(response))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};