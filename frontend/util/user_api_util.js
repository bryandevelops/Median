export const fetchUser = id => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/users/${id}`
    })
  )
};

export const fetchFollowers = id => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/users/${id}/subscribers`,
    })
  )
};

export const fetchFollowees = id => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/users/${id}/subscriptions`,
    })
  )
};

export const followUser = id => {
  return(
    $.ajax({
      method: "POST",
      url: `/api/users/${id}/follow`
    })
  )
};

export const unfollowUser = id => {
  return(
    $.ajax({
      method: "DELETE",
      url: `/api/users/${id}/follow`
    })
  )
};