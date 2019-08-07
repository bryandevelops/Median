json.extract! response, :id, :body, :author_id, :story_id
json.author do
  json.extract! response.author, :id, :fullname, :email
end

json.story do
  json.extract! response.story, :id, :title, :body, :author_id
end