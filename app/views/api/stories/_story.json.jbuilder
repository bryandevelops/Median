json.extract! story, :id, :title, :body, :author_id
json.photo_url url_for(story.photo)

json.author do
  json.extract! story.author, :id, :fullname, :email
end

json.responses do
  story.responses.each do |response|
    json.set! response.id do
      json.partial! "api/responses/response", response: response
    end
  end
end