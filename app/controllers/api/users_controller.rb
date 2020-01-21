class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end
  
  def create
    @user = User.new(user_params) 

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def follow
    @user = current_user
    @followee = User.find(params[:id])
    debugger
    @followee.subscribers << current_user if @followee
  end

  def unfollow
    @user = current_user
    @followee = User.find(params[:id])
    @followee.subscribers.delete(current_user) if @followee
  end

  def subscriptions
    @user = User.find(params[:id])
    @subs = @user.subscriptions
    render "api/users/subs"
  end

  def subscribers
    @user = User.find(params[:id])
    @subs = @user.subscribers
    render "api/users/subs"
  end

  private 

  def user_params
    params.require(:user).permit(:fullname, :email, :password)
  end
end
