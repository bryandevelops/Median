class Api::StoriesController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @stories = Story.all.includes(:author, :responses)
    render "api/stories/index"
  end

  def show
    @story = Story.find(params[:id])
    render "api/stories/show"
  end

  def create
    @story = current_user.stories.new(story_params)
    
    if @story.save
      render "api/stories/show"
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def update
    @story = current_user.stories.find(params[:id])

    if @story.update(story_params)
      render "api/stories/show"
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def destroy
    @story = Story.find(params[:id])

    if @story
      @story.destroy
      render "api/stories/show"    
    else
      render json: ["Not found"], status: 404
    end
  end

  def clap
    @user = current_user
    @clapped = Story.find(params[:id])
    @clapped.total_claps << current_user if @clapped
  end

  def unclap
    @user = current_user
    @clapped = Story.find(params[:id])
    @clapped.total_claps << current_user if @clapped
  end

  def total_claps
    @user = User.find(params[:id])
    @subs = @user.total_claps
    render "api/stories/subs"
  end

  private

  def story_params
    params.require(:story).permit(:title, :body, :photo)
  end
end
