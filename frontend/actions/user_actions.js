import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";
export const RECEIVE_FOLLOWEES = "RECEIVE_FOLLOWEES";

export const receiveUser = user => {
  return({
    type: RECEIVE_USER,
    user
  })
};

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_USER_ERRORS,
    errors
  })
};

export const receiveFollow = id => {
  return ({
    type: RECEIVE_FOLLOW,
    id
  })
};

export const removeFollow = id => {
  return ({
    type: REMOVE_FOLLOW,
    id
  })
};

export const receiveFollowers = payload => {
  return ({
    type: RECEIVE_FOLLOWERS,
    follows: payload.follows,
    users: payload.users,
    id: payload.id
  })
};

export const receiveFollowees = payload => {
  return ({
    type: RECEIVE_FOLLOWEES,
    follows: payload.follows,
    user: payload.users,
    id: payload.id
  })
};

export const fetchUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveErrors(err.status))
  ))
};

export const followUser = id => dispatch => {
  return UserAPIUtil.followUser(id).then(() => (
    dispatch(receiveFollow(id))
  ))
};

export const unfollowUser = id => dispatch => {
  return UserAPIUtil.unfollowUser(id).then(() => (
    dispatch(removeFollow(id))
  ))
};

export const fetchFollowers = id => dispatch => {
  return UserAPIUtil.fetchFollowers(id).then(payload => (
    dispatch(receiveFollowers(payload))
  ))
};

export const fetchFollowees = id => dispatch => {
  return UserAPIUtil.fetchFollowees(id).then(payload => (
    dispatch(receiveFollowees(payload))
  ))
};