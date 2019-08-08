json.extract! user, :id, :fullname, :email
json.following current_user.subscriptions.include?(@user) if logged_in?
# json.subscriber_count @user.subscribers.count
# json.subscription_count @user.subscriptions.count