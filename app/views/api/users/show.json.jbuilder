json.partial! "api/users/user", user: @user

json.subscriber_count @user.subscribers.count
json.subscription_count @user.subscriptions.count

json.stories do
  @user.stories.each do |story|
    json.set! story.id do
      json.partial! "api/stories/story", story: story
    end
  end
end

json.responses do
  @user.responses.each do |response|
    json.set! response.id do
      json.partial! "api/responses/response", response: response
    end
  end
end