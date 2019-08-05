json.partial! "api/users/user", user: @user

json.stories do
  @user.stories.each do |story|
    json.set! story.id do
      json.partial! "api/stories/story", story: story
    end
  end
end