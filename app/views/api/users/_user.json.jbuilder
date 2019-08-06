json.extract! user, :id, :fullname, :email

json.stories do
  user.stories.each do |story|
    json.set! story.id do
      json.partial! "api/stories/story", story: story
    end
  end
end

json.responses do
  user.responses.each do |response|
    json.set! response.id do
      json.partial! "api/responses/response", response: response
    end
  end
end

