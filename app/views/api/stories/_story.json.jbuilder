json.extract! story, :id, :title, :body, :author_id
json.photo_url url_for(story.photo)

json.author do
  json.extract! story.author, :id, :fullname, :email
end
