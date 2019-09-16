export const fetchStories = () => {
  return(
    $.ajax({
      method: "GET",
      url: "/api/stories",
    })
  );
};

export const fetchStory = id => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/stories/${id}`,
    })
  );
};

export const createStory = story => {
  return(
    $.ajax({
      method: "POST",
      url: "/api/stories",
      data: { story },
    })
  );
};

export const updateStory = story => {
  return(
    $.ajax({
      method: "PATCH",
      url: `/api/stories/${story.id}`,
      data: { story },
    })
  );
};

export const deleteStory = id => {
  return(
    $.ajax({
      method: "DELETE",
      url: `/api/stories/${id}`,
    })
  );
};

export const fetchClaps = id => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/stories/${id}/total_claps`,
    })
  );
};

export const clapStory = id => {
  return(
    $.ajax({
      method: "POST",
      url: `/api/stories/${id}/clap`,
    })
  );
};

export const unclapStory = id => {
  return(
    $.ajax({
      method: "DELETE",
      url: `/api/stories/${id}/clap`,
    })
  )
}