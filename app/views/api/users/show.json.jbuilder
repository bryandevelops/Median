json.partial! "api/users/user", user: @user
# json.users do
#   json.id @user.id
#   json.full_name @user.full_name
#   json.email @user.email
#   json.following current_user.subscriptions.include?(@user) if logged_in?
  json.subscriber_count @user.subscribers.count
  json.subscription_count @user.subscriptions.count
# end

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