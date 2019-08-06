export const fetchResponses = () => {
  return(
    $.ajax({
      method: "GET",
      url: "/api/responses",
    })
  );
};

export const fetchResponse = id => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/responses/${id}`,
    })
  );
};

export const createResponse = response => {
  return(
    $.ajax({
      method: "POST",
      url: "/api/responses",
      data: { response },
    })
  );
};

export const updateResponse = response => {
  return(
    $.ajax({
      method: "PATCH",
      url: `/api/responses/${response.id}`,
      data: { response },
    })
  );
};

export const deleteResponse = id => {
  return(
    $.ajax({
      method: "DELETE",
      url: `/api/responses/${id}`,
    })
  );
};