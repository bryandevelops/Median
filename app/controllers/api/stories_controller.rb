class Api::StoriesController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]
# 
  def index
    @stories = Story.all
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

  private

  def story_params
    params.require(:story).permit(:title, :body)
  end
end
