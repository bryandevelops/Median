class Api::FollowsController < ApplicationController
  def index
    @follower_relationships = current_user.follower_relationships
    @following_relationships = current_user.following_relationships
  end

  def create
    @follow_user = User.find(params[:follow][:followee_id])
    @fol = current_user.follower_relationships.new(:followee_id: @follow_user.id)

    if @fol.save
      ???
    else
      ???
    end
  end

  def destroy
    @follow = Follow.find(params[:id])

    if @follow.following == current_user
      @follow.destroy
      render ???
    else
      render ???
    end
  end
end
