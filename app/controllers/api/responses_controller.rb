class Api::ResponsesController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @responses = Response.all
    render "api/responses/index"
  end

  def show
    @response = Response.find(params[:id])
    render "api/responses/show"
  end

  def create
    @response = current_user.responses.new(response_params)
    @response.story_id = params[:story_id]

    if @response.save
      render "api/responses/show"
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  def update
    @response = current_user.responses.find(params[:id])

    if @response.update(response_params)
      render "api/responses/show"
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  def destroy
    @response = Response.find(params[:id])

    if @response
      @response.destroy
      render "api/responses/show"
    else
      render json: ["Not found"], status: 404
    end
  end

  private

  def response_params
    params.require(:response).permit(:body)
  end
end
