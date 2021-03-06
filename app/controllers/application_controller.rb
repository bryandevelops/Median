class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception 
  # OR protect_from_forgery with: :null_session
  #  ^^^ Will throw an InvalidAuthenticityToken exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    @current_user = nil
    session[:session_token] = nil
    true
  end

  def require_logged_in
    if !current_user
      render json: { base: ['Must be logged in'] }, status: 401
    end
  end
end
