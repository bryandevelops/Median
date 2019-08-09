json.extract! user, :id, :fullname, :email
json.following current_user.subscriptions.include?(@user) if logged_in?
