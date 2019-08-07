export const fetchResponses = storyId => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/stories/${storyId}/responses`,
    })
  );
};

export const fetchResponse = storyId => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/responses/${storyId}`,
    })
  );
};

export const createResponse = response => {
  return(
    $.ajax({
      method: "POST",
      url: `/api/stories/${response.story_id}/responses`,
      data: { response },
    })
  );
};

export const updateResponse = response => {
  return(
    $.ajax({
      method: "PATCH",
      url: `/api/stories/${response.story_id}/responses/${response.id}`,
      data: { response },
    })
  );
};

export const deleteResponse = response => {
  return(
    $.ajax({
      method: "DELETE",
      url: `/api/stories/${response.story_id}/responses/${response.id}`,
    })
  );
};